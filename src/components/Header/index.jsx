import "./style.css";
import PropTypes from "prop-types";

const Header = ({ title = "Search" }) => {
  return (
    <header className="header__container">
      <span>XOGENE LOGO</span>
      <span>{title}</span>
      <span></span>
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string,
};
export default Header;
