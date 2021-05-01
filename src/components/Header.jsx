import React from "react";

// Components
import Button from "./Button";

// Redux
import { useSelector } from "react-redux";

// Routes
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import HomeIcon from "./icons/HomeIcon";
import CartIcon from "./icons/CartIcon";

const Header = () => {
  const history = useHistory();
  const shoppingCart = useSelector((state) => state.shoppingCart.shoppingCart);
  return (
    <div className="header background-jagged ">
      <Link to="/">
        <HomeIcon className="icon__home" />
      </Link>
      <Button
        buttonClassName={"button--transparent"}
        buttonContent={
          <div className="flex--center">
            <div>
              {shoppingCart?.length}
              {" in the cart"}
            </div>
            <div className="icon__container--shopping-cart flex--center">
              <CartIcon className="icon__shopping-cart" />
            </div>
          </div>
        }
        onClick={() => history.push("/shopping-cart")}
      />
    </div>
  );
};
export default Header;
