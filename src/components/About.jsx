import { Col, Container, Image, Row } from "react-bootstrap";

const About = () => {
  return (
    <div>
      <div className="d-flex justify-content-center my-5">
        <h1>About me</h1>
      </div>
      <Container className="d-flex">
        <Row className="m-auto mt-2 align-items-center justify-content-center">
          <Col className="d-flex justify-content-center mb-2">
            <div>
              <Image
                src={"/src/assets/profile-pic.png"}
                alt="Profile"
                roundedCircle
                className="img-fluid"
                style={{ maxHeight: "20em" }}
              />
            </div>
          </Col>
          <Col className="d-flex justify-content-center">
            <div className="lead text-center">
              I've been studying web development for two years, during which
              I've built numerous projects that have helped me hone my skills.
              Currently, I'm in the final stage of my studies and am actively
              looking for an internship to gain practical experience. My focus
              has been on both front-end and back-end development, allowing me
              to understand the full stack of web applications. Throughout my
              journey, I've worked with various technologies and frameworks,
              continuously learning and improving. I'm eager to apply my
              knowledge in a real-world setting and contribute to a development
              team. An internship would be the perfect opportunity to deepen my
              expertise and grow as a developer.
            </div>
          </Col>
        </Row>
      </Container>
      <Container fluid className="d-flex mt-5 justify-content-center">
        <Row className="text-center">
          <Col className="border rounded p-5 mx-2 my-5">
            <h1>
              <i className="bi bi-patch-check"></i>
            </h1>
            <h2 className="mt-3">Fullstack Web Development Program</h2>
            <h3 className="mt-3">Helsinki Business College</h3>
            <p>2022 - present</p>
          </Col>
          <Col className="border rounded p-5 mx-2 my-5">
            <h1>
              <i className="bi bi-person-workspace"></i>
            </h1>
            <div className="mt-3">
              <h2 className="mt-3">Operations and Privacy Manager</h2>
              <h3 className="mt-3">Benete Oy</h3>
              <p>2020 - 2024</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
