import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItems, removeItems } from "../../../../redux/slices/orderSlice";
import { addItemsDescriptions } from "../../../../redux/slices/descriptionSlice";

import styles from "./ItemCard.module.css";
import Button from "../../../ui/button/Button";
import ButtonOrder from "../../../ui/buttonOreder/ButtonOrder";

import imgCard from "../../../../../img/test.png";
function ItemCard({
  onClickModal,
  id,
  categories,
  description,
  titleName,
  price,
  price1,
  amount,
}) {
  const statusButton = useSelector((state) =>
    state.order.items.some((obj) => obj.id === id)
  );
  const dispatch = useDispatch();

  const addItemsOrder = () => {
    const cartItem = {
      id,
      categories,
      description,
      titleName,
      price,
      price1,
      amount,
    };
    dispatch(addItems(cartItem));
  };

  const onClickRemoveItems = (id) => {
    const itemID = {
      id,
    };
    dispatch(removeItems(itemID));
  };

  const onClickDescription = () => {
    const cartItem = {
      categories,
      description,
      titleName,
      price,
      price1,
      amount,
    };
    dispatch(addItemsDescriptions(cartItem));
  };

  const buttonState = !statusButton ? (
    <ButtonOrder
      Children={"В корзину"}
      onClick={() => {
        addItemsOrder();
      }}
    />
  ) : (
    <ButtonOrder
      Children={"Добавлено"}
      onClick={() => {
        onClickRemoveItems(id);
      }}
    />
  );

  return (
    <>
      <div className={styles.itemCard}>
        <div className={styles.imgCard}>
          <img src={imgCard} />
        </div>
        <div className={styles.titleItemCard}>
          <h4>{titleName}</h4>
        </div>
        <div className={styles.priceItemCard}>
          <div>{price}</div>
          <div>{amount}</div>
        </div>
        <div className={styles.button}>
          <Button
            Children={"Подробнее"}
            onClick={() => {
              onClickModal(), onClickDescription();
            }}
          />
          {buttonState}
        </div>
      </div>
    </>
  );
}

export default ItemCard;
