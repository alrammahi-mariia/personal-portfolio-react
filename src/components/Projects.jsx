import { Button, Card, Col, Container, Row } from "react-bootstrap";

const Projects = () => {
  return (
    <div>
      <div className="d-flex justify-content-center my-5">
        <h1>Projects</h1>
      </div>
      <Container fluid>
        <Row xs={2} md={3} lg={4} className="g-3">
          <Col className="mt-5">
            <Card className="h-100" bg="dark" text="light" border="muted">
              <div>
                <Card.Img
                  variant="top"
                  src={`/src/assets/country_single.png`}
                  alt={`Countries app`}
                  className="rounded h-50"
                  style={{
                    objectFit: "cover",
                    objectPosition: "top",
                    minHeight: "200px",
                    maxHeight: "200px",
                  }}
                />
              </div>
              <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                <Card.Title>Countries App</Card.Title>
                <Button
                  href={`https://github.com/alrammahi-mariia/countries-app`}
                  size="lg"
                  variant="light"
                  className="w-30 mt-3"
                >
                  <i className="bi bi-github"></i> Github
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="h-100" bg="dark" text="light" border="muted">
              <div>
                <Card.Img
                  variant="top"
                  src={`/src/assets/TasteIt.png`}
                  alt={`TasteIt`}
                  className="rounded h-50"
                  style={{
                    objectFit: "cover",
                    objectPosition: "top",
                    minHeight: "200px",
                    maxHeight: "200px",
                  }}
                />
              </div>
              <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                <Card.Title>Countries App</Card.Title>
                <Button
                  href={`https://github.com/alrammahi-mariia/TasteIt`}
                  size="lg"
                  variant="light"
                  className="w-30 mt-3"
                >
                  <i className="bi bi-github"></i> Github
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="h-100" bg="dark" text="light" border="muted">
              <div>
                <Card.Img
                  variant="top"
                  src={`/src/assets/menu-app.png`}
                  alt={`Jimmy's Diner`}
                  className="rounded h-50"
                  style={{
                    objectFit: "cover",
                    objectPosition: "top",
                    minHeight: "200px",
                    maxHeight: "200px",
                  }}
                />
              </div>
              <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                <Card.Title>Jimmy's Diner</Card.Title>
                <Button
                  href={`https://github.com/alrammahi-mariia/restaurant-menu-mobile`}
                  size="lg"
                  variant="light"
                  className="w-30 mt-3"
                >
                  <i className="bi bi-github"></i> Github
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="h-100" bg="dark" text="light" border="muted">
              <div>
                <Card.Img
                  variant="top"
                  src={`/src/assets/speedgame.png`}
                  alt={`Speedgame`}
                  className="rounded h-50"
                  style={{
                    objectFit: "cover",
                    objectPosition: "top",
                    minHeight: "200px",
                    maxHeight: "200px",
                  }}
                />
              </div>
              <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                <Card.Title>Speedgame</Card.Title>
                <Button
                  href={`https://github.com/alrammahi-mariia/REACT_speedgame`}
                  size="lg"
                  variant="light"
                  className="w-30 mt-3"
                >
                  <i className="bi bi-github"></i> Github
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Projects;
