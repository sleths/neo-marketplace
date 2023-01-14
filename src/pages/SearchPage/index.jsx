import { useParams } from "react-router-dom";

import Layout from "../../components/MarketplaceLayout/Layout";

import PageTitle from "../../components/Typography/PageTitle";

import DropContainer from "../../components/Container/DropContainer";

import { drops, data } from "../../data/index";

import styles from "./styles.module.scss";

const SearchPage = () => {
  const { value } = useParams();

  const nfts = data.map((x) => x.user.nfts).flat(1);

  const allData = [...nfts, ...drops];

  const searched = allData.filter((item) =>
    item.title.toLowerCase().includes(value.toLowerCase())
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
