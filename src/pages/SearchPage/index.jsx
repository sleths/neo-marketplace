import { useParams } from "react-router-dom";

import Layout from "../../components/MarketplaceLayout/Layout";

import PageTitle from "../../components/Typography/PageTitle";

import DropContainer from "../../components/Container/DropContainer";

import { drops } from "../../data/index";

import styles from "./styles.module.scss";

const SearchPage = () => {
  const { value } = useParams();

  const searched = drops.filter((item) =>
    item.name.toLowerCase().includes(value.toLowerCase())
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
                  mode={item.today === true ? "today" : "future"}
                  key={item.id}
                >
                  {item.name}
                </DropContainer>
              );
            })
          ) : (
            <p>Sorry, no data found</p>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default SearchPage;
