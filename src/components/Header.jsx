import React, { useState, useEffect } from "react";

// Components
import Button from "./Button";
import CartIcon from "./icons/CartIcon";

// Redux
import { useSelector } from "react-redux";

// Router
import { Link } from "react-router-dom";

// Translation
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t } = useTranslation();

  const [cartAnimation, setCartAnimation] = useState("");
  const amounts = useSelector((state) => state.shoppingCart.amounts);

  // Returns the total amount of items in the shopping cart
  const getTotalAmount = (list = []) => {
    let total = 0;
    list.forEach((value) => {
      total += value;
    });
    return total;
  };

  // Triggers an animation on shopping cart button to indicate shopping cart changes to the user
  useEffect(() => {
    setCartAnimation("wiggle");
    setTimeout(() => {
      setCartAnimation("");
    }, 500);
  }, [amounts]);

  return (
    <div className="header background-jagged ">
      <div className="flex--center">
        <Link to="/">
          <Button
            buttonClassName="button--transparent header__logo"
            buttonContent={"whee"}
            onClick={() => {}}
          />
        </Link>
        <div className="header__title">{t("header.title")}</div>
      </div>

      <Link to="/shopping-cart">
        <Button
          buttonClassName={"button--transparent"}
          buttonContent={
            <div className="flex--center">
              <div className="header__cart-title">
                {getTotalAmount(Object.values(amounts)) === 0
                  ? "No"
                  : getTotalAmount(Object.values(amounts))}
                {" item" +
                  (getTotalAmount(Object.values(amounts)) !== 1 ? "s" : "")}
                {" in the cart"}
              </div>
              <div className="icon__container--shopping-cart flex--center">
                <CartIcon className={"icon__shopping-cart " + cartAnimation} />
              </div>
            </div>
          }
          onClick={() => {}}
        />
      </Link>
    </div>
  );
};
export default Header;
