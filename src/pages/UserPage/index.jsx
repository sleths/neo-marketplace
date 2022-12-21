import { useParams } from "react-router-dom";
import UserHero from "../../components/MarketplaceLayout/Hero/UserHero";
import Layout from "../../components/MarketplaceLayout/Layout";
import { data } from "../../data/index";

const UserPage = () => {
  const { address } = useParams();

  const user = data
    .map((item) => item.user)
    .find((item) => item.address === address);

  return (
    <Layout>
      <section style={{ padding: "0 24px" }}>
        <UserHero user={user} />
      </section>
    </Layout>
  );
};

export default UserPage;
