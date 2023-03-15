// import { useLocation } from "react-router";
import { Hero, Posts, SideBar } from "../components";
import "./homepage.css";

export const Homepage = () => {
  // const location = useLocation();
  return (
    <>
    <Hero />
    <div className="home">
      <Posts />
      <SideBar />
    </div>
  </>
  )
}
