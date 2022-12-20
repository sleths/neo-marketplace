import { useParams } from "react-router-dom";
import Layout from "../../components/MarketplaceLayout/Layout";
import { data } from "../../data/index";


const UserPage = () => {
  const { address } = useParams();

  const user = data
    .map((item) => item.user)
    .find((item) => item.address === address);

    console.log(user.bg)

  return (
    <Layout>
      <section style={{ padding: "24px" }}>
        <header>
          <img src={process.env.PUBLIC_URL + user.img} alt=""/>
   
        </header>
        <p>{address}</p>
        <img src={user.img} alt="" />
      </section>
    </Layout>
  );
};

export default UserPage;
