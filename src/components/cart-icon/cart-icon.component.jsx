import "./cart-icon.styles.scss";
import { ReactComponent as ShoppingIcon } from "../../assests/shopping-bag.svg";

const CartIcon = () => {
  return (
    <div className="cart-icon">
      <ShoppingIcon className="shopping-icon"></ShoppingIcon>
      <span className="item-count">1</span>
    </div>
  );
};
export default CartIcon;
