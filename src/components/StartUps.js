import React from "react";
import { Row, Col } from "react-bootstrap";
import InderseLogo from "../assets/img/inderse-logo.png";
import GenieLogo from "../assets/img/genie-logo.png";
import ProjectCard from "./ProjectCard";
const StartUps = () => {
  return (
    <div>
      <h5 className="mb-4">I'm co-founder of the...</h5>
      <Row className=" gy-4 gx-4 mb-4">
        <Col md={6}>
          <ProjectCard
            path={GenieLogo}
            link="https://webappgenie.com"
            title="Genie"
            description="AI based custom web application generator with OpenAI API"
            badges={["React", "ChatGPT", "Bootstrap"]}
            width="73.01"
            alt="Genie Logo"
          ></ProjectCard>
        </Col>
        <Col md={6}>
          <ProjectCard
            path={InderseLogo}
            link="https://inderse.com"
            title="Inderse"
            description="An artificial intelligence-based product ecosystem that makes homes smart"
            badges={["IOT"]}
            width="36.82"
            alt="Inderse Logo"
          ></ProjectCard>
        </Col>
      </Row>
    </div>
  );
};

export default StartUps;
