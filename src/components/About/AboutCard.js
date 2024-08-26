import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone, I'm <span className="purple"> Nicolas Vidal </span>
            from <span className="purple"> Cali, Colombia.</span>
            <br /> I'm an Industrial Engineer with a minor in computer science at Pontificia Universidad Javeriana
            <br />
            <br />
            I am currently employed as an <span className="purple"> Software Engineer for LLM Training </span> at Outlier.ai            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Cooking 
            </li>
            <li className="about-activity">
              <ImPointRight /> MMA Combat 
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
