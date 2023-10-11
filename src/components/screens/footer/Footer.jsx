import React from "react";

import styles from "./Footer.module.css";
function Footer() {
  return (
    <>
      <div className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.infoBlock}>
            <div>
              <img></img>
              <p>
                Военная экипировка и снаряжение оптом и в розницу. Доставка по
                РФ.
              </p>
              <p>ИП Федоров А.А.</p>
              <p>ОГРНИП: 321508100357265</p>
              <p>ИНН: 745307888615</p>
            </div>
            <div>
              <h3>О нас</h3>
              <p>О компании</p>
              <p>Контакты</p>
            </div>
          </div>
          <div className={styles.formBlock}>
            <h3 className={styles.title}>Отправьте заявку</h3>
            <p className={styles.infoForm}>
              Получите профессиональную консультацию и расчёт стоимости
            </p>
            <input
              className={styles.input}
              type="text"
              placeholder="Ваше имя"
            />
            <input
              className={styles.input}
              type="tel"
              placeholder="Номер телефона"
            />
            <input
              className={styles.input}
              type="text"
              placeholder="Ваш E-mail"
            />
            <button className={styles.button}>Отправить</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
