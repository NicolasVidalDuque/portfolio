import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiUbuntu,
  SiPowerbi,
  SiNeovim,
  SiPandas,
  SiTensorflow
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiTensorflow/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPandas/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPowerbi/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiUbuntu/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNeovim/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
    </Row>
  );
}

export default Toolstack;
