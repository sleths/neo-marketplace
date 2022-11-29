import { Route, Routes } from "react-router-dom";
import HomePage from "../../pages/HomePage";
import StatsPage from "../../pages/StatsPage";

const MarketplaceRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/stats" element={<StatsPage />} />
    </Routes>
  );
};

export default MarketplaceRoutes;
