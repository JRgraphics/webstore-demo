import React from "react";
import { useSelector } from "react-redux";
import CatalogueList from "../CatalogueList";

const ShoppingCart = () => {
  const shoppingCart = useSelector((state) => state.shoppingCart.shoppingCart);
  return (
    <div className="shopping-cart page">
      <CatalogueList list={shoppingCart} isCart={true} />
    </div>
  );
};
export default ShoppingCart;
