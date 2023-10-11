import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";

import styles from "./Header.module.css";
import { Link } from "react-router-dom";

import basket from "../../../../public/basket.png";
function Header(props) {
  const itemsLength = useSelector((state) => state.order.items);

  return (
    <>
      <div className={styles.header}>
        <div className={styles.container}>
          <div className={styles.titleNav}>
            <div className={styles.title}>
              <Link to={"/"}>
                <h1>СИРИУС</h1>
              </Link>
            </div>
            <div>
              <nav>
                <ul>
                  <li>
                    <Link to={"/"}>Главная</Link>
                  </li>
                  <li>
                    <Link to={"/"} onClick={props.onClickCatalogs}>
                      Каталог
                    </Link>
                  </li>
                  <li>
                    <Link onClick={props.onClickContacts}>Контакты</Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div className={styles.address}>
            <div className={styles.address1}>
              <div>
                <p>Адрес: Москва</p>
                <p>Номер телефона</p>
              </div>
              <div>
                <p>Почта</p>
                <p>Номер телефона</p>
              </div>
            </div>

            <div className={styles.blockBasket}>
              <Link to={"/basket"}>
                <div className={styles.basket}>
                  <div>
                    <p>Корзина</p>
                  </div>
                  <span className={styles.polosa}>|</span>
                  <div className={styles.imgBasket}>
                    <img src={basket} />
                  </div>
                  <span className={styles.span}>{itemsLength.length}</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
