import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            <br />
            I have completed my Bachelor of Science in Information Technology and certification in Software Development from Moringa School.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Watching movies and TV-series
            </li>
            <li className="about-activity">
              <ImPointRight /> Following F1 and football
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening to music
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling
            </li>
            <li className="about-activity">
              <ImPointRight /> Working out
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "You imagine it, I create it."{" "}
          </p>
          <footer className="blockquote-footer">Ian Gichachi</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
