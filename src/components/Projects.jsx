import api from "../assets/api-pic.png";
import weather from "../assets/weather-app-pic.png";
import gamesReview from "../assets/games-review-pic.png";

export const Projects = () => {
  return (
    <div id="projects-page" className="section-container-projects">
      <h1 id="projects-heading" className="page-heading">
        My <span id="projects-span">Projects</span>
      </h1>
      <div id="projects-display">
        <div id="project-1">
          <h2 className="project-sub-headings">Weather App</h2>
          <div className="project-2-grid">
            <img src={weather} />
            <div className="project-description-and-lang">
              <p>
                <span className="span-projects">Languages and Libraries:</span>{" "}
                HTML, CSS, JavaScript and Reactjs
              </p>
              <p>
                <span className="span-projects">Description:</span> A
                user-friendly weather web application with real-time weather
                data sourced from weatherAPI
              </p>

              <div className="project-buttons">
                <a
                  target="blank_"
                  href="https://amaan-weather-app-v1.netlify.app/"
                >
                  Live
                </a>
                <a
                  target="blank_"
                  href="https://github.com/amaanmughal/amaan-weather-app-v1"
                >
                  code
                </a>
              </div>
            </div>
          </div>
        </div>

        <div id="project-2">
          <h2 className="project-sub-headings">Games Review Website</h2>
          <div className="project-2-grid">
            <img src={gamesReview} />
            <div className="project-description-and-lang">
              <p>
                <span className="span-projects">Languages and Libraries:</span>{" "}
                HTML, SCSS, JavaScript and Reactjs
              </p>
              <p>
                <span className="span-projects">Description:</span> A
                user-friendly games review web application with data sourced
                from my own games review API
              </p>
              <p>
                <span className="span-projects">Test Account:</span> Username:
                tickle122 || Full Name: tom tickle
              </p>

              <div className="project-buttons">
                <a
                  target="blank_"
                  href="https://main--games-review-v3.netlify.app/"
                >
                  Live
                </a>
                <a
                  target="blank_"
                  href="https://github.com/amaanmughal/games-review-v3"
                >
                  code
                </a>
              </div>
            </div>
          </div>
        </div>

        <div id="project-3">
          <h2 className="project-sub-headings">Games Review API</h2>
          <div className="project-2-grid">
            <img src={api} />
            <div className="project-description-and-lang">
              <p>
                <span className="span-projects">Languages and Libraries:</span>{" "}
                Node.js, Express.js, Jest JavaScript and PostgreSQL
              </p>
              <p>
                <span className="span-projects">Description:</span> The games
                review backend created using PostgreSQL serves as the foundation
                of the gaming review web application
              </p>
              <div className="project-buttons">
                <a
                  target="blank_"
                  href="https://nc-games-project-amaan.onrender.com/api"
                >
                  Live
                </a>
                <a
                  target="blank_"
                  href="https://github.com/amaanmughal/NC-games-project-amaan"
                >
                  code
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
