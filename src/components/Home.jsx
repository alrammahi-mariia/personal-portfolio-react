import ParticlesBg from "particles-bg";
import { Button } from "react-bootstrap";

const Home = () => {
  return (
    <div>
      <ParticlesBg type="circle" bg={true} />
      <div className="d-flex vh-100">
        <div className="align-self-center text-center text-light col-md-8 offset-md-2">
          <div className="mb-4">
            <h1 className="display-1 fw-bolder">Mariia Al-Rammahi</h1>
          </div>
          <div className="my-4">
            <h2 className="lead">Fullstack developer</h2>
          </div>
          <div className="d-flex flex-column flex-sm-row justify-content-center gap-2 gap-sm-5">
            <div className="mb-2">
              <Button
                href={`https://www.linkedin.com/in/maria-beskova/`}
                variant="light"
                size="lg"
              >
                <i className="bi bi-linkedin"></i> LinkedIn
              </Button>
            </div>
            <div>
              <Button
                href={`https://github.com/alrammahi-mariia`}
                variant="dark"
                size="lg"
                className="w-100"
              >
                <i className="bi bi-github"></i> Github
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
