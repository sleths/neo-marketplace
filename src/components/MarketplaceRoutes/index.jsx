import { Route, Routes } from "react-router-dom";
import DropsPage from "../../pages/DropsPage";
import HomePage from "../../pages/HomePage";
import StatsPage from "../../pages/StatsPage";
import UserPage from "../../pages/UserPage";

const MarketplaceRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/stats" element={<StatsPage />} />
      <Route path="/drops" element={<DropsPage />} />
      <Route path="/user/:address" element={<UserPage />} />
    </Routes>
  );
};

export default MarketplaceRoutes;
