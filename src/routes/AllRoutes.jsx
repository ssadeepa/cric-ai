import { Routes, Route } from "react-router-dom";
import {
  Country,
  Homepage,
  PlayerComparision,
  PlayerProfile,
} from "../pages";
import { NavBar } from "../components";
// import { Home } from "../components/Home";

export const AllRoutes = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="" element={<Homepage />} />
        <Route path="playerComparision" element={<PlayerComparision />} />
        <Route path="playerProfile" element={<PlayerProfile />} />
        <Route path="country" element={<Country />} />
      </Routes>
    </div>
  );
};
