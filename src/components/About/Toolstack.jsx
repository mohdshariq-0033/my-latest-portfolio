import React from "react";
import { Col, Row } from "react-bootstrap";
import { BiLogoVisualStudio } from "react-icons/bi";
import { BsWindows } from "react-icons/bs"; 

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons tool">
      <BsWindows />
      </Col>
      <Col xs={4} md={2} className="tech-icons tool">
       <BiLogoVisualStudio />
      </Col>
    </Row>
  );
}

export default Toolstack;
