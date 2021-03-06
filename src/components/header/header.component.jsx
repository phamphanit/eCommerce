import "./header.styles.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assests/crown.svg";
import CartIcon from "../cart-icon/cart-icon.component";
const Header = () => (
  <div className="header">
    <Link to="/" className="logo-container">
      <Logo className="logo"></Logo>
    </Link>
    <ul className="options">
      <Link to="/shop" className="option">
        SHOP
      </Link>
      <Link to="/contact" className="option">
        CONTACT
      </Link>
      <Link to="/signIn" className="option">
        SIGNIN
      </Link>
      <CartIcon></CartIcon>
    </ul>
  </div>
);

export default Header;
