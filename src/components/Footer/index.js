import instagram from "../../assets/images/instagram.svg";
import linkedIn from "../../assets/images/linkedIn.svg";
import github from "../../assets/images/github.svg";
import gmail from "../../assets/images/gmail.svg";
import "./index.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="socialWrapper">
        <div className="follow">Follow us</div>
        <div className="socialIcons">
          <div className="icon">
            <a
              href="https://www.linkedin.com/in/sahil-kumar-a055b9181/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={linkedIn} alt="linkedin" />
            </a>
          </div>
          <div className="icon">
            <a
              href="https://github.com/sahillkumar"
              target="_blank"
              rel="noreferrer"
            >
              <img src={github} alt="github" />
            </a>
          </div>
          <div className="icon">
            <a
              href="https://instagram.com/sahillkumar_/ "
              target="_blank"
              rel="noreferrer"
            >
              <img src={instagram} alt="instagram" />
            </a>
          </div>
          <div className="icon">
            <a
              href="mailto:sahil511kumar@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <img src={gmail} alt="gmail" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
