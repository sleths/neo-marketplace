import CarouselWraper from "../../components/Wrapper/CarouselWraper";
import DropsHero from "../../components/MarketplaceLayout/Hero/DropsHero";
import Layout from "../../components/MarketplaceLayout/Layout";
import { drops } from "../../data";
import DropContainer from "../../components/Container/DropContainer";
import LoadMoreWrapper from "../../components/Wrapper/LoadMoreWrapper";
const DropsPage = () => {
  const data = drops.filter((drop) => drop.today === true);

  return (
    <Layout>
      <DropsHero />
      <CarouselWraper title="Active drops">
        {data.map((item) => {
          return (
            <DropContainer drop={item} mode="today" key={item.id}>
              {item.name}
            </DropContainer>
          );
        })}
      </CarouselWraper>
      <LoadMoreWrapper title="Upcoming drops" mode="future" />
    </Layout>
  );
};

export default DropsPage;
