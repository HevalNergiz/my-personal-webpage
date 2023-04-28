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

function Home() {
  return (
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
  );
}

export default Home;
