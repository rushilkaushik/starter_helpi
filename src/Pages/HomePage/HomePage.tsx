import React from "react";
import "./HomePage.css"; // Import your CSS file
import JobMatchAI from "../../assets/JobMatchAILarge.png";

interface HomePageProps {
  // Define any props here if needed.
}

const HomePage: React.FC<HomePageProps> = () => {
  return (
    <div className="home-page">
      <nav className="navbar navbar-expand-lg navbar-light bg-white py-3">
        <div className="container px-5">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 small fw-bolder">
              <li className="nav-item">
                {/* <a className="nav-link" href="">  put this in navbar */}
                Home
                {/* </a> */}
              </li>
              <li className="nav-item">
                {/* <a className="nav-link" href="">  put this in navbar */}
                Login
                {/* </a> */}
              </li>
              <li className="nav-item">
                {/* <a className="nav-link" href="">  put this in navbar */}
                Basic Questions Page
                {/* </a> */}
              </li>
              <li className="nav-item">
                {/* <a className="nav-link" href="">  put this in navbar */}
                Detail Questions Page
                {/* <a className="nav-link" href="">  put this in navbar */}
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <header className="py-5">
        <div className="container px-5 pb-5">
          <div className="row gx-5 align-items-center">
            <div className="col-xxl-5">
              <div className="text-center text-xxl-start">
                <div className="fs-3 fw-light text-muted">Welcome to</div>
                <h1 className="display-3 fw-bolder mb-5">
                  <span className="text-gradient d-inline">JobMatchAI</span>
                </h1>
                <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xxl-start mb-3">
                  {/* <a
                    className="btn btn-primary btn-lg px-5 py-3 me-sm-3 fs-6 fw-bolder"
                    href=" " ///to add
                  > */}
                  <button
                    className="btn btn-primary btn-lg px-5 py-3 me-sm-3 fs-6 fw-bolder"
                    //href=" " ///to add
                  >
                    Basic Questions Quiz
                  </button>
                  {/* <a
                    className="btn btn-outline-dark btn-lg px-5 py-3 fs-6 fw-bolder"
                    // href="" //to add
                  > */}
                  <button>Detailed Questions Page</button>

                  {/* </a> */}
                </div>
              </div>
            </div>

            <div className="col-xxl-7">
              <div className="d-flex justify-content-center mt-5 mt-xxl-0">
                <div className="profile">
                  <img className="profile-img" src={JobMatchAI} alt="Profile" />
                  {/* Add SVG and other content here as needed */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default HomePage;
