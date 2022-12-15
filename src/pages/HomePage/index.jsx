import Layout from "../../components/MarketplaceLayout/Layout";
import Hero from "../../components/Hero";
import TopSellers from "../../components/Wrapper/TopSellers";
import RecommendedCreators from "../../components/Wrapper/RecommendedCreators";
import TodaysPicks from "../../components/Wrapper/TodaysPicks";

const HomePage = () => {
  return (
    <Layout>
      <Hero />
      <RecommendedCreators />
      <TopSellers />
      <TodaysPicks />
    </Layout>
  );
};

export default HomePage;
