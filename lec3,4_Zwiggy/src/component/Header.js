import {
  ABOUT_US_ICON,
  CART_ICON,
  CONTACT_US_ICON,
  HOME_ICON,
  LOGO,
} from "../utils/constants";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" alt="Restaurant app logo" src={LOGO} />
        <h2>Ziwwgy</h2>
      </div>

      <div className="nav-items">
        <ul>
          <div className="icon">
            <img className="nav-icons" src={HOME_ICON} />
            <li>Home</li>
          </div>
          <div className="icon">
            <img className="nav-icons" src={ABOUT_US_ICON} />
            <li>About us</li>
          </div>
          <div className="icon">
            <img className="nav-icons" src={CART_ICON} />
            <li>Cart</li>
          </div>
          <div className="icon">
            <img className="nav-icons" src={CONTACT_US_ICON} />
            <li>Contact us</li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Header;
