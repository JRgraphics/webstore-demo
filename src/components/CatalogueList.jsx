import React from "react";

// Components
import Button from "./Button";

// Redux
import { useDispatch, useSelector } from "react-redux";

// Translation
import { useTranslation } from "react-i18next";
import { addToCart, deleteFromCart } from "../actions";

const CatalogueList = ({ list = [], isCart = false }) => {
  return (
    <ul className="catalogue-list list">
      {list.map((item, index) => (
        <CatalogueListItem
          key={index}
          item={item}
          index={index}
          isCart={isCart}
        />
      ))}
    </ul>
  );
};

export const CatalogueListItem = ({ item, index, isCart }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const amounts = useSelector((state) => state.shoppingCart.amounts);
  return (
    <li className="catalogue__item flex">
      <img className="item__image" src={item.image} alt={item.name} />
      <div className="item__name">
        <div>{t("catalogue.names." + item.name)}</div>
        <div>{t("catalogue.descriptions." + item.description)}</div>
      </div>
      {isCart ? <div>{amounts[item.id]}</div> : null}
      <div className="item__price">
        <div>
          {(isCart ? item.price * amounts[item.id] : item.price) + " €"}
        </div>
        {isCart ? (
          <Button
            buttonClassName={""}
            buttonContent={"REMOVE FROM THE CART"}
            onClick={() => dispatch(deleteFromCart(item, index))}
          />
        ) : (
          <Button
            buttonClassName={""}
            buttonContent={"ADD TO CART"}
            onClick={() => dispatch(addToCart(item))}
          />
        )}
      </div>
    </li>
  );
};
export default CatalogueList;
