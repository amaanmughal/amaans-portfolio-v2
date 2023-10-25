import pc from "../assets/animated-pc.gif";
import bootstrapIcon from "../assets/skills-icons/bootstrap-5-1.svg";
import reactIcon from "../assets/skills-icons/react-2.svg";
import htmlIcon from "../assets/skills-icons/html-1.svg";
import cssIcon from "../assets/skills-icons/css-3.svg";
import sassIcon from "../assets/skills-icons/sass-1.svg";
import nodeIcon from "../assets/skills-icons/nodejs-1.svg";
import expressIcon from "../assets/skills-icons/express-109.svg";
import postgresIcon from "../assets/skills-icons/postgresql.svg";
import jestIcon from "../assets/skills-icons/jest-2.svg";
import linkedInIcon from "../assets/icons8-linkedin-48.png";
import cvIcon from "../assets/icons8-cv-64.png";
import gitIcon from "../assets/icons8-github-50.png";

export const MySkills = () => {
  return (
    <div id="skills-section" className="section-container-skills">
      <div className="skills-grid">
        <h1 className="page-heading">
          Me And My <span id="skills-span">Skills</span>
        </h1>

        <ul className="front-end-container">
          <li>
            <h2 className="skills-sub-heading">Front End</h2>
          </li>
          <li>
            <img src={reactIcon} />
            <h4>React.js</h4>
          </li>
          <li>
            <img src={htmlIcon} />
            <h4>HTML5</h4>
          </li>
          <li>
            <img src={cssIcon} />
            <h4>CSS3</h4>
          </li>
          <li>
            <img src={sassIcon} />
            <h4>SASS / SCSS</h4>
          </li>
          <li>
            <img src={bootstrapIcon} />
            <h4>Bootstrap</h4>
          </li>
        </ul>

        <ul className="back-end-container">
          <li>
            <h2 className="skills-sub-heading">Back End</h2>
          </li>
          <li>
            <img src={nodeIcon} />
            <h4>Node.js</h4>
          </li>
          <li>
            <img src={expressIcon} />
            <h4>Express.js</h4>
          </li>
          <li>
            <img src={postgresIcon} />
            <h4>Postgres</h4>
          </li>
          <li>
            <img src={jestIcon} />
            <h4>Jest testing</h4>
          </li>
        </ul>

        <ul className="language-container">
          <li>
            <h2 className="skills-sub-heading">Languages</h2>
          </li>
          <li>
            <h4>Javascript</h4>
          </li>
          <li>
            <h4>Typescript</h4>
          </li>
          <li>
            <h4>Regular Expression</h4>
          </li>
        </ul>
        <img className="about-me-main-img" src={pc} />

        <ul className="qualifications-container">
          <h2 className="skills-sub-heading">Qualifications</h2>
          <li>
            <h4>Business and Management Degree</h4>
          </li>
          <li>
            <h4>Coding Bootcamp</h4>
          </li>
          <li>
            <h4>PRINCE2</h4>
          </li>
        </ul>

        <ul className="other-skills-container">
          <h2 className="skills-sub-heading">Other Skills</h2>
          <li>
            <h4>Git / GitHub</h4>
          </li>
          <li>
            <h4>Netlify</h4>
          </li>
          <li>
            <h4>Microsoft Office</h4>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MySkills;
