import React from "react";

// Components
import List from "../lists/List";

// Redux
import { useSelector } from "react-redux";

// Translation
import { useTranslation } from "react-i18next";

const ShoppingCart = () => {
  const { t } = useTranslation();

  const shoppingCart = useSelector((state) => state.shoppingCart.shoppingCart);

  return (
    <div className="shopping-cart page">
      <div className="page__title">{t("titles.shoppingCart")}</div>
      <List name={"shopping-cart"} list={shoppingCart} />
    </div>
  );
};
export default ShoppingCart;
