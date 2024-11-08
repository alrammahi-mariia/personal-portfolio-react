import { Container, ProgressBar } from "react-bootstrap";

const Skills = () => {
  return (
    <div>
      <div className="d-flex justify-content-center my-5">
        <h1>Skills</h1>
      </div>
      <Container className="w-50">
        <ProgressBar now={60} animated />
        <p>PHP</p>
      </Container>
      <Container className="w-50">
        <ProgressBar now={60} animated />
        <p>Symfony</p>
      </Container>
      <Container className="w-50">
        <ProgressBar now={70} animated />
        <p>Javascript</p>
      </Container>
      <Container className="w-50">
        <ProgressBar now={70} animated />
        <p>ReactJs</p>
      </Container>
      <Container className="w-50">
        <ProgressBar now={50} animated />
        <p>Drupal</p>
      </Container>
      <Container className="w-50">
        <ProgressBar now={55} animated />
        <p>Unit Testing</p>
      </Container>
      <Container className="w-50">
        <ProgressBar now={45} animated />
        <p>MySQL</p>
      </Container>
      <Container className="w-50">
        <ProgressBar now={50} animated />
        <p>Ci/CD</p>
      </Container>
    </div>
  );
};

export default Skills;
