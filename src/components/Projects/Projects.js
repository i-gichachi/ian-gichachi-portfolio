import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCards from "./ProjectCards";
import Particle from "../Particle";
import connecto from "../../Assets/Projects/Connecto.png";
import pro from "../../Assets/Projects/Pro.png";
import webcraft from "../../Assets/Projects/Webcraft Wizards.jpg";

const projects = [
  {
    title: "Connecto",
    description: "Empowering Creators And Brands To Navigate The Influencer Marketing Landscape",
    imgUrl: connecto,
    link: "https://connecto.co.ke/"
  },
  {
    title: "Pro Resume Crafters",
    description: "Expert Resume Writing Services to Help You Land Your Dream Job",
    imgUrl: pro,
    link: "https://proelite.vercel.app/"
  },
  {
    title: "WebCrafters Wizards",
    description: "Unleash Your Digital Magic",
    imgUrl: webcraft,
    link: "https://webcraft-wizards.vercel.app/"
  }
];

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
          {projects.map((project, index) => (
            <Col key={index} md={4} className="project-card">
              <ProjectCards
                imgPath={project.imgUrl}
                isBlog={false}
                title={project.title}
                description={project.description}
                demoLink={project.link}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
