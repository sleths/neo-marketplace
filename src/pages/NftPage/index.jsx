import { useParams } from "react-router-dom";
import { data } from "../../data/index";

import NftDetailContainer from "../../components/Container/NftDetailContainer";
import Layout from "../../components/MarketplaceLayout/Layout";
import { switchRender } from "../../utils/helpers";

const NftPage = () => {
  const { address } = useParams();
  
  const nft = data
    .map((item) => item.user.nfts.find((x) => x.address === address))
    .find((nft) => nft !== undefined);

  const children = <NftDetailContainer nft={nft} />;

  return <Layout>{switchRender(nft, children)}</Layout>;
};

export default NftPage;
