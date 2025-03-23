import React from "react";
import "../assets/css/styles.css";
import About from "../components/About";
import ArticlesList from "../components/ArticlesList";
import BgImage from "../components/BgImage";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import Profile from "../components/Profile";
import StartUps from "../components/StartUps";
import StartUpsList from "../components/StartUpsList";
import Technologies from "../components/Technologies";
import Wrapper from "../components/Wrapper";

function Home() {
  return (
    <>
      <Wrapper>
        <Profile></Profile>
        <About></About>
        <Technologies></Technologies>
        <StartUps></StartUps>
        <StartUpsList></StartUpsList>
        <ArticlesList></ArticlesList>
        <Footer></Footer>
        <Menu></Menu>
      </Wrapper>
      <BgImage alt="ephesus" width="100%" height="auto"></BgImage>
    </>
  );
}

export default Home;
