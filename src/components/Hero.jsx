import "./hero.css";
import HeroImg from "../assets/3.jpg";

export const Hero = () => {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">PATHWAY OF CRICKET</span>
        <span className="headerTitleLg">criCHive</span>
      </div>
      <img className="headerImg" src={HeroImg} alt="Logo" />
      <span className="Stories">MATCH STORIES</span>
    </div>
  );
};
