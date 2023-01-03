import { useParams } from "react-router-dom";
import { switchRender } from "../../utils/helpers";
import UserHero from "../../components/MarketplaceLayout/Hero/UserHero";
import Layout from "../../components/MarketplaceLayout/Layout";
import { data } from "../../data/index";

const UserPage = () => {
  const { address } = useParams();

  const user = data
    .map((item) => item.user)
    .find((item) => item.address === address);

  const children = (
    <section style={{ padding: "0 24px" }}>
      <UserHero user={user} />
    </section>
  );

  return <Layout>{switchRender(user, children)}</Layout>;
};

export default UserPage;
