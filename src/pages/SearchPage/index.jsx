import { useParams } from "react-router-dom";

import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

import Layout from "../../components/MarketplaceLayout/Layout";

import PageTitle from "../../components/Typography/PageTitle";

import DropContainer from "../../components/Container/DropContainer";

import { drops } from "../../data/index";

import styles from "./styles.module.scss";
import { useState } from "react";

const SearchPage = () => {
  const { value } = useParams();

  const [searched, setSearched] = useState(
    drops.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    )
  );

  return (
    <Layout>
      <section className="wrapper">
        <PageTitle>Search</PageTitle>
        <div className={`center ${styles.container}`}>
          {searched.length > 0 ? (
            searched.map((item) => {
              return (
                <DropContainer
                  drop={item}
                  search={true}
                  mode={item.today === true ? "today" : "future"}
                  key={item.id}
                >
                  {item.name}
                </DropContainer>
              );
            })
          ) : (
            <p className={styles.text}>Sorry, no data found</p>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default SearchPage;
