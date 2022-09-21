import "./Header.scss";
import BookImage from "../../assets/images/book.png";
import Headerbody from "./Headerbody/Headerbody";

const Header: React.FC = () => {
  return (
    <section className="hero-section">
      <div className="hero-section__navbar">
        <div className="hero-section__navbar__navbar-left">
          <img src={BookImage} alt="" />
          <span>E- School</span>
        </div>
        <div className="hero-section__navbar__navbar-right">
          <a href="">Books</a>
          <a href="">Courses</a>
          <a href="">Others</a>
          <button className="hero-section__navbar__button">Sign in</button>
        </div>
      </div>
      <div className='hero-section__body'>
            <Headerbody/>
        </div>
    </section>
  );
};

export default Header;
