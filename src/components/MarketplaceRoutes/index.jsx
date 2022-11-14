import { Route, Routes } from "react-router-dom";
import HomePage from "../../pages/HomePage";

const MarketplaceRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>} />
    </Routes>
  );
};

export default MarketplaceRoutes;