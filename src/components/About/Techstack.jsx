import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaHtml5 } from "react-icons/fa";
import { PiFileCssFill } from "react-icons/pi";
import { FaBootstrap } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import {
  DiJavascript1,
  DiReact,
  DiPython,
} from "react-icons/di";


function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
      <FaHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <PiFileCssFill />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <FaBootstrap />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <RiTailwindCssFill />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
    </Row>
  );
}

export default Techstack;
