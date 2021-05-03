import React, { useState } from "react";

// Components
import Button from "../Button";
import CloseIcon from "../icons/CloseIcon";
import Input from "../input/Input";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { deleteFromCart, modifyCart } from "../../actions";

// Translation
import { useTranslation } from "react-i18next";

const ShoppingCartList = ({ list = [] }) => {
  return (
    <ul className="shopping-cart-list list">
      {list.map((item, index) => (
        <ShoppingCartListItem key={index} item={item} index={index} />
      ))}
    </ul>
  );
};

export const ShoppingCartListItem = ({ item, index }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const [priceFader, setPriceFader] = useState("");

  const amounts = useSelector((state) => state.shoppingCart.amounts);

  // Modifies the amount of cart item
  const handleOnChange = (value) => {
    priceFaderAnimator(value);
  };

  // Removes item from the cart
  const handleOnDelete = () => {
    dispatch(deleteFromCart(item, index));
  };

  // Animation when item's amount, and therefore total price, changes
  const priceFaderAnimator = (value) => {
    setPriceFader("fade-out--half");
    setTimeout(() => {
      dispatch(modifyCart(item, value));
      setPriceFader("fade-in--half");
    }, 250);
  };

  return (
    <li className="shopping-cart__item flex">
      <div className="item__column flex">
        <img className="item__image" src={item.image} alt={item.name} />
        <div className="item__name">{t("catalogue.names." + item.name)}</div>
      </div>

      <div className={"item__price item__column flex--center " + priceFader}>
        {item.price * amounts[item.id] + " €"}
      </div>
      <div className="item__column flex">
        <Input
          name={"number-toggle"}
          className="input__shopping-cart"
          type={"number"}
          onChange={handleOnChange}
          onDelete={handleOnDelete}
          defaultValue={amounts[item.id]}
        />
        <Button
          buttonClassName={"button--transparent"}
          buttonContent={<CloseIcon className="icon__close" />}
          onClick={handleOnDelete}
        />
      </div>
    </li>
  );
};
export default ShoppingCartList;
