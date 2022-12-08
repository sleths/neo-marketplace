import Layout from "../../components/Layout";
import Hero from "../../components/Hero";
import TopSellers from "../../components/TopSellers";
import RecommendedCreators from "../../components/RecommendedCreators";
import TodaysPicks from "../../components/TodaysPicks";

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
