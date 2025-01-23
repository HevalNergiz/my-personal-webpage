import React from "react";
import Profile from "../components/Profile";
import About from "../components/About";
import Technologies from "../components/Technologies";
import StartUps from "../components/StartUps";
import StartUpsList from "../components/StartUpsList";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import Wrapper from "../components/Wrapper";
import ArticlesList from "../components/ArticlesList";
import "../assets/css/styles.css";
import BgImage from "../components/BgImage";
import ErrorTrigger from "../components/ErrorTrigger";

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
        <ErrorTrigger></ErrorTrigger>
      </Wrapper>
      <BgImage alt="ephesus" width="100%" height="auto"></BgImage>
    </>
  );
}

export default Home;
