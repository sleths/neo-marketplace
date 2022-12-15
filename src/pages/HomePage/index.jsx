import Layout from "../../components/MarketplaceLayout/Layout";
import HomePageHero from "../../components/MarketplaceLayout/Hero/HomePageHero"
import TopSellers from "../../components/Wrapper/TopSellers";
import RecommendedCreators from "../../components/Wrapper/RecommendedCreators";
import TodaysPicks from "../../components/Wrapper/TodaysPicks";

const HomePage = () => {
  return (
    <Layout>
      <HomePageHero />
      <RecommendedCreators />
      <TopSellers />
      <TodaysPicks />
    </Layout>
  );
};

export default HomePage;
