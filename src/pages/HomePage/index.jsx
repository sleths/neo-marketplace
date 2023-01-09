import { data } from "../../data/index";
import Layout from "../../components/MarketplaceLayout/Layout";
import HomePageHero from "../../components/MarketplaceLayout/Hero/HomePageHero";
import RecommendedCreatorsContainer from "../../components/Container/RecommendedCreatorsContainer";
import CarouselWraper from "../../components/Wrapper/CarouselWraper";
import LoadMoreWrapper from "../../components/Wrapper/LoadMoreWrapper";
import TopSellers from "../../components/Wrapper/TopSellers";
import NewsContainer from "../../components/Container/NewsContainer";

const HomePage = () => {
  const recommended_creators = data
    .map((item) => item.user.nfts.find((x) => x.recommended_creators === true))
    .filter((item) => item !== undefined);

  return (
    <Layout>
      <HomePageHero />
      <LoadMoreWrapper title="Today's picks" mode="todays_pick" />
      <TopSellers />
      <NewsContainer />
      <CarouselWraper title="Recommended creators">
        {recommended_creators.map((item) => {
          return <RecommendedCreatorsContainer nft={item} key={item.id} />;
        })}
      </CarouselWraper>
    </Layout>
  );
};

export default HomePage;
