import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="project-title mb-0">{props.title}</Card.Title>
        <Card.Text className="project-description mb-3">{props.description}</Card.Text>
        <div className="mt-auto">
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            className="project-button"
          >
            <CgWebsite /> &nbsp;
            {"Visit Website"}
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
