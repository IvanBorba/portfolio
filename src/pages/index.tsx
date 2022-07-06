import { Routes, Route } from "react-router-dom";
import LandingPage from "./Landing";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
    </Routes>
  );
};

export default Router;
