import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../../../client";

import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import SectionTitle from "../../../components/Typography/SectionTitle";

import styles from "./styles.module.scss";

const NewsContainer = () => {
  const [posts, setPosts] = useState(null);

  const fetchPosts = async () => {
    sanityClient
      .fetch(
        `*[_type == "post" ]{
            title,
            description,
            slug,
            mainImage{
              asset -> {
                _id, 
                url
              },
              alt
            }
        }`
      )
      .then((data) => setPosts(data))
      .catch(console.error);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className={styles.wrapper}>
      <section className="max-width wrapper">
        <SectionTitle>Resources for getting started</SectionTitle>
        <div className={`center ${styles.container}`}>
          {posts &&
            posts.map((post) => (
              <article className="center">
                <img src={post.mainImage.asset.url} alt={post.mainImage.alt} />
                <h5>{post.title}</h5>
                <p>{post.description}</p>
                <Link className="center" to={`/post/${post.slug.current}`}>
                  <KeyboardArrowRightIcon />
                  See more details
                </Link>
              </article>
            ))}
        </div>
      </section>
    </div>
  );
};

export default NewsContainer;
