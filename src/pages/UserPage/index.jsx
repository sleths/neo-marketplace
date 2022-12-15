import { useParams } from "react-router-dom";
import Layout from "../../components/MarketplaceLayout/Layout";
const UserPage = () => {
  const { address } = useParams();
  
  return <Layout>{address}</Layout>;
};

export default UserPage;
