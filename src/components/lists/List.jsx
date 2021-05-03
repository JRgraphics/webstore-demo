import React from "react";

// Components
import CatalogueList from "./CatalogueList";
import ShoppingCartList from "./ShoppingCartList";

const List = ({ name, list = [] }) => {
  const renderList = () => {
    switch (name) {
      case "catalogue":
        return <CatalogueList list={list} />;
      case "shopping-cart":
        return <ShoppingCartList list={list} />;
      default:
        return <CatalogueList list={[]} />;
    }
  };
  return renderList();
};
export default List;
