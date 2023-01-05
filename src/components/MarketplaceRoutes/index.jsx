import { Route, Routes } from "react-router-dom";
import DropsPage from "../../pages/DropsPage";
import HomePage from "../../pages/HomePage";
import NftPage from "../../pages/NftPage";
import StatsPage from "../../pages/StatsPage";
import UserPage from "../../pages/UserPage";
import SearchPage from "../../pages/SearchPage";
import NotFoundPage from "../../pages/NotFoundPage";
import PostDetailsPage from "../../pages/PostDetailsPage";

const MarketplaceRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="stats" element={<StatsPage />} />
      <Route path="drops" element={<DropsPage />} />
      <Route path="user/:address" element={<UserPage />} />
      <Route path="nft/:address" element={<NftPage />} />
      <Route path="search/:value" element={<SearchPage />} />
      <Route path="post/:slug" element={<PostDetailsPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default MarketplaceRoutes;
