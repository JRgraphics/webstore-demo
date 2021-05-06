import React from "react";

// Components
import Button from "../Button";
import EmptyIcon from "../icons/EmptyIcon";
import List from "../lists/List";
import ProceedIcon from "../icons/ProceedIcon";

// Redux
import { emptyCart } from "../../actions";
import { useDispatch, useSelector } from "react-redux";

// Router
import { Link } from "react-router-dom";

// Translation
import { useTranslation } from "react-i18next";

const ShoppingCart = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const shoppingCart = useSelector((state) => state.shoppingCart.shoppingCart);
  const amounts = useSelector((state) => state.shoppingCart.amounts);

  // Empties the whole shopping cart state
  const handleOnEmpty = () => {
    dispatch(emptyCart());
  };

  // Handles the checkout; parses the data to be sent regarding the order
  const handleOnCheckout = () => {
    // Just prints out amounts, so representing how many items have been ordered
    // keys being items' ids and values the ordered amounts
    // No backend solution to handle the data (yet)
    console.log(amounts);
  };

  return (
    <div className="shopping-cart page">
      <div className="shopping-cart__header flex">
        <Link to="/">
          <Button
            buttonClassName="button--transparent header__logo flex--center"
            buttonContent={
              <ProceedIcon className="icon__home icon__return" color={"#000"} />
            }
            onClick={() => {}}
          />
        </Link>
        <div className="page__title">{t("titles.shoppingCart")}</div>
      </div>
      <List name={"shopping-cart"} list={shoppingCart} />
      {/* Show footer only if there are items in the shopping cart */}
      {shoppingCart.length > 0 ? (
        <div className="shopping-cart__footer flex">
          <Button
            buttonClassName={"button__empty flex--center fade-in"}
            buttonContent={
              <>
                {t("labels.empty")}
                <EmptyIcon className="icon__empty" />
              </>
            }
            onClick={handleOnEmpty}
          />
          <Button
            buttonClassName="button__checkout flex--center fade-in"
            buttonContent={
              <>
                {t("labels.checkout")}
                <ProceedIcon className="icon__empty" />
              </>
            }
            onClick={handleOnCheckout}
          />
        </div>
      ) : null}
    </div>
  );
};
export default ShoppingCart;
