import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import Med from "../../Assets/Projects/Med.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Med}
              isBlog={false}
              title="Medicine Insight Ai"
              description="**Med-Insight** is an AI-powered web app that provides instant, reliable information on any medicine, including uses, dosage, side effects, and interactions. Ideal for healthcare professionals, patients, and anyone seeking accurate drug details."
              ghLink="https://github.com/Muzamil-074/MedInsight-Web-App-Project"
              demoLink="https://med-insight-web-app-project.vercel.app/"
            />
          </Col>

        
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
