import { Container, Row, Col } from "react-bootstrap";

const Contact = () => {
  return (
    <Container className="d-flex flex-column min-vh-100">
      <Row className="justify-content-center my-auto">
        <div className="text-center mb-4">
          <h1>Get in Touch</h1>
        </div>
      </Row>

      <Row className="justify-content-center">
        <Col xs={12} md={8} className="text-center">
          <div className="contact-info">
            <div className="contact-item d-flex align-items-center justify-content-center mb-3">
              <i className="bi bi-envelope me-2"></i>
              <p className="m-0">
                <a
                  href="mailto:mariia.bieskova@gmail.com"
                  className="contact-link"
                >
                  mariia.bieskova@gmail.com
                </a>
              </p>
            </div>

            <div className="contact-item d-flex align-items-center justify-content-center">
              <i className="bi bi-linkedin me-2"></i>
              <p className="m-0">
                <a
                  href="https://www.linkedin.com/in/maria-beskova/"
                  className="contact-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </p>
            </div>
          </div>
        </Col>
      </Row>

      <footer className="text-center py-3 mt-auto">
        <p className="m-0">
          &copy; 2023 Mariia Al-Rammahi. All Rights Reserved.
        </p>
      </footer>
    </Container>
  );
};

export default Contact;
