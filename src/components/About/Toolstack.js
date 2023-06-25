import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiGeeksforgeeks,
  SiLeetcode,
  SiCodechef,
  SiHackerrank,
  SiGithub,
  
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <SiGeeksforgeeks />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
      <SiLeetcode />
    </Col>

    <Col xs={4} md={2} className="tech-icons">
      <SiCodechef />
    </Col>
    <Col xs={4} md={2} className="tech-icons">
      <SiHackerrank />
    </Col>
    <Col xs={4} md={2} className="tech-icons">
      <SiGithub />
    </Col>

    </Row>
  );
}

export default Toolstack;
