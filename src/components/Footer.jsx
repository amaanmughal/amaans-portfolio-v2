import personIcon from "../assets/person-fill.svg";
import speechIcon from "../assets/chat-right-dots-fill.svg";
import envelopeIcon from "../assets/envelope-at-fill.svg";

export const Footer = () => {
  return (
    <footer id="contact-page">
      <div className="text-center">
        <h1 className="get-in-touch-heading">
          Get In <span>Touch</span>
        </h1>
      </div>
      <div className="row justify-content-center my-5">
        <div className="col-lg-6">
          <form action="mailto:mohammed.amaan.mughal@outlook.com">
            <label htmlFor="email" className="form-label">
              Email address:
            </label>
            <div className="mb-4 input-group">
              <span className="input-group-text">
                <img src={envelopeIcon}></img>
              </span>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="e.g. example@outlook.com"
              />
            </div>

            <label htmlFor="name" className="form-label">
              Full Name:
            </label>
            <div className="mb-4 input-group">
              <span className="input-group-text">
                <img src={personIcon}></img>
              </span>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="e.g. Mohammed Mughal"
              />
            </div>

            <label htmlFor="subject" className="form-label">
              Subject:
            </label>
            <div className="mb-4 input-group">
              <span className="input-group-text">
                <img src={speechIcon}></img>
              </span>
              <input
                type="text"
                className="form-control"
                id="subject"
                placeholder="e.g. Interview"
              />
            </div>

            <label htmlFor="query" className="form-label">
              Message:
            </label>
            <textarea className="form-control" id="query"></textarea>

            <div className="mb-4 text-center">
              <button className="button-submit" type="submit" value="send">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
