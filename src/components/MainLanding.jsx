import amaan from "../assets/amaangraduation-removebg-preview.png";

export const MainLanding = () => {
  return (
    <div id="landing-page" className="section-container-main-landing">
      <div id="amaan_typewrite">
        <p>
          Amaan The <span>Developer</span>
        </p>
      </div>
      <div>
        <img id="image-landing-page" src={amaan} />
      </div>
    </div>
  );
};

export default MainLanding;
