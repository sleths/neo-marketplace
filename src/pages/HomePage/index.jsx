import { data } from "../../data/index";
import Layout from "../../components/MarketplaceLayout/Layout";
import HomePageHero from "../../components/MarketplaceLayout/Hero/HomePageHero";
import RecommendedCreatorsContainer from "../../components/Container/RecommendedCreatorsContainer";
import CarouselWraper from "../../components/Wrapper/CarouselWraper";
import LoadMoreWrapper from "../../components/Wrapper/LoadMoreWrapper";
import TopSellers from "../../components/Wrapper/TopSellers";
import NewsContainer from "../../components/Container/NewsContainer";

const HomePage = () => {
  return (
    <Layout>
      <HomePageHero />
      <CarouselWraper title="Recommended creators">
        {data.map((item, index) => {
          return <RecommendedCreatorsContainer item={item.user} key={index} />;
        })}
      </CarouselWraper>
      <TopSellers />
      <NewsContainer />
      <LoadMoreWrapper title="Today's picks" mode="todays_pick" />
    </Layout>
  );
};

export default HomePage;
