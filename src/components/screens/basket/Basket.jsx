import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItems } from "../../../redux/slices/orderSlice";

import styles from "./Basket.module.css";

import ButtonBuy from "../../ui/buttonBuy/ButtonBuy";

import imgCard from "../../../../img/test.png";
import deleteImg from "../../../../public/delete.png";

function Basket() {
  const dispatch = useDispatch();
  const itemBasket = useSelector((state) => state.order.items);
  const [userName, setUserName] = useState("Имя");
  const [firstName, setFirstName] = useState("Фамилия");
  const [tel, setTel] = useState("Телефон");
  const [mail, setMail] = useState("E-mail");
  const [komment, setKomment] = useState("Есть");

  const onClickRemoveItems = (id) => {
    const itemID = {
      id,
    };
    dispatch(removeItems(itemID));
  };

  const onChangeUserName = (e) => {
    setUserName(e.target.value);
  };
  const onChangeFirstName = (e) => {
    setFirstName(e.target.value);
  };
  const onChangeTel = (e) => {
    setTel(e.target.value);
  };
  const onChangeMail = (e) => {
    setMail(e.target.value);
  };
  const onChangeKomment = (e) => {};

  const basketCard = itemBasket.map((meal) => (
    <div key={meal.id} className={styles.itemsCardOrder}>
      <div className={styles.infoItem}>
        <div className={styles.imgInfo}>
          <img src={imgCard} />
        </div>
        <div className={styles.description}>
          <h2>{meal.titleName}</h2>
          <div className={styles.descP}>
            <p>
              Категория: <span>{meal.categories}</span>
            </p>
            <p>
              Количество <span>1 шт.</span>
            </p>
          </div>
        </div>
      </div>
      <div className={styles.priceBlock}>
        <div className={styles.price}>
          <div>
            <p>
              <span>Опт</span> {meal.price} <span>руб.</span>
            </p>
          </div>
          <div>
            <p>
              <span>Крупный опт</span> {meal.price1} <span>руб.</span>
            </p>
          </div>
        </div>
        <div className={styles.imgDelete}>
          <img src={deleteImg} onClick={() => onClickRemoveItems(meal.id)} />
        </div>
      </div>
    </div>
  ));
  const orderCard = itemBasket.map((item, index) => (
    <li>
      {index + 1}. {item.titleName}
    </li>
  ));
  return (
    <>
      <div className={styles.container}>
        <h1>Оформление заказа</h1>
        <div className={styles.basket}>
          <div className={styles.item}>
            {basketCard}
            <div className={styles.data}>
              <h1>Ваши данные</h1>
              <div className={styles.userData}>
                <div className={styles.star}>
                  <input
                    className={styles.inputForm}
                    type="text"
                    placeholder="Имя"
                    required
                    onChange={(e) => onChangeUserName(e)}
                  />
                  <p>*</p>
                </div>
                <div className={styles.star}>
                  <input
                    className={styles.inputForm}
                    type="text"
                    placeholder="Фамилия"
                    required
                    onChange={(e) => onChangeFirstName(e)}
                  />
                  <p>*</p>
                </div>
              </div>
              <div className={styles.userData}>
                <div className={styles.star}>
                  <input
                    className={styles.inputForm}
                    type="tel"
                    placeholder="Телефон"
                    required
                    onChange={(e) => onChangeTel(e)}
                  />
                  <p>*</p>
                </div>
                <div className={styles.star}>
                  <input
                    className={styles.inputForm}
                    type="text"
                    placeholder="E-mail"
                    required
                    onChange={(e) => onChangeMail(e)}
                  />
                  <p>*</p>
                </div>
              </div>
              <div>
                <textarea
                  className={styles.textarea}
                  rows="4"
                  maxLength="300"
                  placeholder="Комментарий"
                  onChange={(e) => onChangeKomment(e)}
                ></textarea>
              </div>
            </div>
          </div>
          <div className={styles.formPriceOrder}>
            <div className={styles.containerForm}>
              <h1>Данные</h1>
              <div className={styles.sumPrice}>
                <div className={styles.infoPrice}>
                  <div>
                    <span>Имя</span>
                  </div>
                  <div>
                    <p>{userName}</p>
                  </div>
                </div>
                <div className={styles.infoPrice}>
                  <div>
                    <span>Фамилия</span>
                  </div>
                  <div>
                    <p>{firstName}</p>
                  </div>
                </div>
                <div className={styles.infoPrice}>
                  <div>
                    <span>Телефон</span>
                  </div>
                  <div>
                    <p>{tel}</p>
                  </div>
                </div>
                <div className={styles.infoPrice}>
                  <div>
                    <span>E-mail</span>
                  </div>
                  <div>
                    <p>{mail}</p>
                  </div>
                </div>
                <div className={styles.infoPrice}>
                  <div>
                    <span>Комментарий</span>
                  </div>
                  <div>
                    <p>{komment}</p>
                  </div>
                </div>
              </div>
              <h1>Заказ</h1>
              <div className={styles.sumPrice}>
                <ul>{orderCard}</ul>
              </div>
            </div>
            <div className={styles.button}>
              <ButtonBuy Children="ОФОРМИТЬ ЗАКАЗ" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Basket;
