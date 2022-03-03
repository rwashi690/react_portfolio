// Import necessary stylesheets
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

// Import the images
import portfolio_pic from "./images/IMG_2276.jpeg";
import road from "./images/road2.jpg";
import graduation_cap from "./images//graduation_cap.jpg";
import graphene from "./images/graphene_Fe.png";
import cinemagic from "./images/project4.jpeg";
import urbandict from "./images/project1.jpg";
import codequiz from "./images/project3.jpeg";

function App() {
  return (
    <div className="d-inline">
      <div className="p-5 mb-4 bg-light rounded-3">
        <div className="row">
          <div className="col-lg-">
            <div className="row">
              <div className="col">
                <img
                  className="img-responsive image_format float-start"
                  src={portfolio_pic}
                  alt="Rachel smiling with her hair in a bun against a brick wall"
                />
              </div>

              <div className="col">
                <h1 className="display-4">Rachel Elizabeth Washington</h1>
              </div>
            </div>
            <div className="lead row justify-content-center button_format">
              <a
                className="btn col ms-2 btn-outline-dark"
                href="https://github.com/rwashi690"
                role="button"
              >
                GitHub
              </a>
              <a
                className="btn col ms-2  btn-outline-dark"
                href="./RachWashington_UpdatedCV.pdf"
                role="button"
              >
                CV
              </a>
              <a
                className="btn col ms-2  btn-outline-dark"
                href="https://www.linkedin.com/in/rachel-washington-913a0045/"
                role="button"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="card col text-center">
          <img
            className="card-img-top about_image_format"
            src={road}
            alt="Green forrest surrounding a winding road"
          />
          <div className="card-body">
            <a
              className="card-text btn btn-success btn-lg btn-block"
              href="./codingjourney.html"
            >
              Coding Journey
            </a>
          </div>
        </div>

        <div className="card col text-center">
          <img
            className="card-img-top about_image_format2"
            src={graduation_cap}
            alt="A blue graduation cap with a yellow tassel"
          />
          <div className="card-body">
            <a
              className="card-text btn btn-warning btn-lg btn-block"
              href="./education.html"
            >
              Education and Awards
            </a>
          </div>
        </div>

        <div className="card col text-center">
          <img
            className="card-img-top about_image_format3"
            src={graphene}
            alt="A sheet of graphene with an iron atom embedded in the structure"
          />
          <div className="card-body">
            <a
              className="card-text btn btn-primary btn-lg btn-block"
              href="./thesis.html"
            >
              Masters of Science
            </a>
          </div>
        </div>
      </div>
      <div className="card col-l border-info mb-3">
        <h5 className="card-header">Cinemagic</h5>
        <div className="card-body">
          <img
            className="card-img"
            src={cinemagic}
            alt="Film reel across the screen"
          />
          <a
            href="https://cinemajik.herokuapp.com/"
            className="btn btn-info float-right button_project_format"
          >
            Visit Project
          </a>
        </div>
      </div>

      <div className="row">
        <div className="col-sm-6">
          <div className="card border-info mb-3">
            <h5 className="card-header">Ultimate Urban Dictionary</h5>
            <div className="card-body">
              <img className="card-img" src={urbandict} alt="Books in a line" />
              <a
                href="https://rwashi690.github.io/Urban_Dictionary_and_Memes/"
                className="btn btn-info float-right button_project_format"
              >
                Visit Project
              </a>
            </div>
          </div>
        </div>

        <div className="col-sm-6">
          <div className="card border-info mb-3">
            <h5 className="card-header">Coding Quiz</h5>
            <div className="card-body">
              <img className="card-img" src={codequiz} alt="Question Mark" />
              <a
                href="https://rwashi690.github.io/Coding-Quiz/"
                className="btn btn-info float-right button_project_format"
              >
                Visit Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
