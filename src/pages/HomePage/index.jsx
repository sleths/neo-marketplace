import Layout from "../../components/Layout";
import Hero from "../../components/Hero";
import TopSellers from "../../components/TopSellers";
import RecommendedCreators from "../../components/RecommendedCreators";

const HomePage = () => {
  return (
    <Layout>
      <Hero />
      <RecommendedCreators />
      <TopSellers />
    </Layout>
  );
};

export default HomePage;
