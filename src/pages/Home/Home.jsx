import React from 'react'
import './home.css';
import Navbar from '../../components/Navbar/Navbar';
import hero_banner from '../../assets/banner.jpg';
import hero_title from "../../assets/caption.png";
import  play_icon from "../../assets/play.png";
import info_icon from "../../assets/info-icon.png";
import TitleCards from '../../components/TitleCards/TitleCards';
const Home = () => {
  return <div className="home">
      <Navbar />
      <div className="hero">
        <img src={hero_banner} alt="" className="banner-img" />
        <div className="hero-caption">
          <img src={hero_title} alt="" className="caption-img" />
          <p>
            Discovering his ties to a secret ancient order, a young man living
            in modern Istanbul ambarks on a quest to sa city from an immortal
            enemy.
          </p>
          <div className="hero-btns">
            <button className="btn">
              <img src={play_icon} alt="" />Play
            </button>
            <button className="btn dark-btn">
              <img src={info_icon} alt="" />More Info
            </button>
          </div>
          <TitleCards />
        </div>
      </div>
      <div className="more-cards">
        <TitleCards title={"Blockbuster Movies"} />
        <TitleCards title={"Only on Netflix"} />
        <TitleCards title={"UpComing"} />
        <TitleCards title={"Top Pics for you"} />
      </div>
    </div>;
}

export default Home
