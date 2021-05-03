import React from "react";

// Components
import Button from "../Button";

// Redux
import { useDispatch } from "react-redux";

// Translation
import { useTranslation } from "react-i18next";
import { addToCart } from "../../actions";

const CatalogueList = ({ list = [] }) => {
  return (
    <ul className="catalogue-list list">
      {list.map((item, index) => (
        <CatalogueListItem key={index} item={item} index={index} />
      ))}
    </ul>
  );
};

export const CatalogueListItem = ({ item, index, isCart }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  return (
    <li className="catalogue__item flex">
      <div className="item__column flex--center">
        <img className="item__image" src={item.image} alt={item.name} />
        <div>
          <div className="item__name">{t("catalogue.names." + item.name)}</div>
          <div className="item__description">
            {t("catalogue.descriptions." + item.description)}
          </div>
        </div>
      </div>
      <div className="item__column">
        <div className="item__price">{item.price + " €"}</div>

        <Button
          buttonClassName={"button__add-to-cart"}
          buttonContent={"ADD TO CART"}
          onClick={() => dispatch(addToCart(item))}
        />
      </div>
    </li>
  );
};
export default CatalogueList;
