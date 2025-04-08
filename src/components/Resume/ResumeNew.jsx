import { Container, Row } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "/shariqResume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  
  return (
    <>
      <Container fluid className="resume-section">
        <Particle />

        <img src="/resumeIMG.png" className="img-fluid" alt="resumeIMG">
        </img>
        <Row style={{ justifyContent: "center", position: "relative", marginTop: "30px" }}>
          <Button id="Btn"
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

      </Container>
    </>
  );
}

export default ResumeNew;
