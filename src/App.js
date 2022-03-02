// Import necessary stylesheets
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

// Import the images
import portfolio_pic from "./images/IMG_2276.jpeg";

function App() {
  return (
    <div>
      <div className="p-5 mb-4 bg-light rounded-3">
        <div className="row">
          <div className="col-lg-">
            <div className="row">
              <div className="col">
                <img
                  className="image_format img-responsive float-start"
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
    </div>
  );
}

export default App;
