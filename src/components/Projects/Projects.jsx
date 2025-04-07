import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Port2 from "../../Assets/Projects/portfolioIMG2.png";
import Shop from "../../Assets/Projects/shoppingIMG.png";
import Art from "../../Assets/Projects/artGalleryIMG.png";
import Port from "../../Assets/Projects/portfolioIMG.png";

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
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={Art}
              isBlog={false}
              title="Art gallery"
              description="The Online Art Gallery is a dynamic and interactive web-based platform designed to showcase a diverse collection of artworks categorized into four main components: Historical, Cars, Nature, and Technical. This platform enables users to explore different artistic themes through a structured and engaging interface. The website is built using HTML, CSS, and Bootstrap, ensuring a responsive and visually appealing design that works seamlessly across devices."
              ghLink="https://github.com/mohdshariq-0033/Art-gallery-react-vite"
              demoLink="https://artgallery0033.netlify.app/"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={Port}
              isBlog={false}
              title="MY first portfolio"
              description="This is a responsive and interactive personal portfolio website developed using HTML, CSS, and JavaScript. The website is designed to showcase my skills, projects, experience, and contact information in a visually appealing and professional manner."
              ghLink="https://github.com/mohdshariq-0033/My-first-portfolio"
              demoLink="https://portfoliojs0033.netlify.app/"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={Shop}
              isBlog={false}
              title="Shopping"
              description="Discover a seamless and enjoyable shopping experience with [Your Store Name], your one-stop online store for everything you need! Whether you're looking for the latest fashion trends, top tech gadgets, home essentials, or unique gifts, we have it all in one place."
              ghLink="https://github.com/mohdshariq-0033/E-commerce"
              demoLink="https://shopping0033.netlify.app/"              
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={Port2}
              isBlog={false}
              title="Portfolio"
              description="Hi, I’m mohd shariq
              I’m a passionate Web Developer
              This portfolio showcases some of my best work – from concept to execution.

              Let’s connect and create something amazing together!"
              ghLink="https://github.com/mohdshariq-0033/my-latest-portfolio"
              demoLink="/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
