import amaan from "../assets/amaangraduation-removebg-preview.png";
import linkedInIcon from "../assets/icons8-linkedin-48.png";
import cvIcon from "../assets/icons8-cv-64.png";
import gitIcon from "../assets/icons8-github-50.png";
import amaanCV from "../AmaanMughalCVpdf.pdf";

export const MainLanding = () => {
  return (
    <div id="landing-page" className="section-container-main-landing">
      <div id="landing-page-grid">
        <div id="amaan_typewrite">
          <p>
            Amaan The <span>Developer</span>
          </p>
        </div>
        <div className="landing-page-middle-row">
          <h2>Full Stack Developer</h2>
          <p>
            With a deep understanding of modern web technologies and a keen eye
            for design, I bring creativity and functionality together to create
            stunning and user-friendly websites. I take great pride in crafting
            clean and efficient code, leveraging my expertise in{" "}
            <span>Full Stack Development</span> to create visually appealing and
            scalable projects.
          </p>
          <div className=" landing-page-links">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/mohammed-amaan-mughal-534513207/"
            >
              <img src={linkedInIcon} />
              <p>LinkedIn</p>
            </a>

            <a href={amaanCV} download={amaanCV}>
              <img src={cvIcon} />
              <p>CV</p>
            </a>

            <a target="blank_" href="https://github.com/amaanmughal">
              <img src={gitIcon} />
              <p>GitHub</p>
            </a>
          </div>
        </div>
        <div className="landing-page-bottom-row">
          <img id="image-landing-page" src={amaan} />
        </div>
      </div>
    </div>
  );
};

export default MainLanding;
