import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone, I'm <span className="purple"> Nicolas Vidal Duque </span>
            from <span className="purple"> Bogotá, Colombia.</span>
            <br /> I'm an Industrial Engineer with a minor in computer science at Pontificia Universidad Javeriana
            <br />
            <br />
            I am currently employed as an <span className="purple"> IT - Data Analyst </span> at Ericsson            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Cooking 
            </li>
            <li className="about-activity">
              <ImPointRight /> Kung Fu Combat 
            </li>
            <li className="about-activity">
              <ImPointRight /> Track and Field
            </li>
          </ul>

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
