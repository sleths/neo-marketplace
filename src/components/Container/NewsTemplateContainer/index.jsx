import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import imageUrlBuilder from "@sanity/image-url";

import sanityClient from "../../../client";
import BlockContent from "@sanity/block-content-to-react";

import PageTitle from "../../Typography/PageTitle";

import styles from "./styles.module.scss";
import SectionTitle from "../../Typography/SectionTitle";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

const NewsTemplateContainer = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);

  const fetchPost = async () => {
    await sanityClient
      .fetch(
        `*[slug.current == "${slug}"]{
            title,
            _id,
            slug,
            body,
            description,
            mainImage{
              asset -> {
                _id, 
                url
              },
              alt
            }
    }`
      )
      .then((data) => {
        setPost(data[0]);
      })
      .catch(console.error);
  };
  useEffect(() => {
    fetchPost();
  }, [slug]);

  return (
    <section className="wrapper">
      {post !== null ? (
        <>
          <img
            className={styles.img}
            src={post.mainImage.asset.url}
            alt={post.title}
          />
          <h1 className={styles.title}>{post.title}</h1>
          <p className={styles.description}>
            <em>{post.description}</em>
          </p>
          <article className={styles.textContainer}>
            <BlockContent
              blocks={post.body}
              projectId="mzcli4oc"
              dataset="production"
            />
          </article>
        </>
      ) : (
        "Loading"
      )}
    </section>
  );
};

export default NewsTemplateContainer;
