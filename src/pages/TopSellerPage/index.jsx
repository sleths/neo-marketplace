import { useParams } from "react-router-dom";
import { top_sellers } from "../../data/index";

import NftDetailContainer from "../../components/Container/NftDetailContainer";
import Layout from "../../components/MarketplaceLayout/Layout";
import { switchRender } from "../../utils/helpers";

const TopSellerPage = () => {
  const { address } = useParams();

  const nft = top_sellers.find((item) => item.address === address);

  const children = <NftDetailContainer nft={nft} />;

  return <Layout>{switchRender(nft, children)}</Layout>;
};

export default TopSellerPage;
