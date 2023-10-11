import React from "react";

import ButtonOrder from "../../ui/buttonOreder/ButtonOrder";

import styles from "./InfoBlock.module.css";

import Slider from "../../../../public/Slider.jpg";
import sto from "../../../../public/100.png";
import garant from "../../../../public/garant.png";
import price from "../../../../public/price.png";
import mony from "../../../../public/mony.png";
function InfoBlock() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.infoBlock}>
          <div className={styles.info}>
            <div className={styles.dost}>
              <p>Доставка по РФ и СНГ</p>
            </div>
            <h1>Снаряжение оптом</h1>
            <ul>
              <li>— Снаряжение для боевых действий, туризма и охоты</li>
              <li>— Товар в наличии на складе</li>
              <li>— Скидки постоянным клиентам</li>
              <li>— Прямые поставки из Китая</li>
            </ul>
            <div className={styles.infoButton}>
              <ButtonOrder Children="Перейти к каталогу" />
            </div>
          </div>
          <div className={styles.slider}>
            <img src={Slider} className={styles.sliderImg}></img>
          </div>
        </div>
        <div className={styles.garant}>
          <div className={styles.garantBlock}>
            <div>
              <img src={sto} />
            </div>
            <div className={styles.desctiption}>
              <h2>100% подлинность</h2>
              <p>товар со всеми документами</p>
            </div>
          </div>
          <div className={styles.garantBlock}>
            <div>
              <img src={garant} />
            </div>
            <div className={styles.desctiption}>
              <h2>Гарантия</h2>
              <p>на все товары, без исключений</p>
            </div>
          </div>
          <div className={styles.garantBlock}>
            <div>
              <img src={price} />
            </div>
            <div className={styles.desctiption}>
              <h2>Минимальная наценка</h2>
              <p>на весь ассортимент товаров</p>
            </div>
          </div>
          <div className={styles.garantBlock}>
            <div>
              <img src={mony} />
            </div>
            <div className={styles.desctiption}>
              <h2>Безналичный расчёт</h2>
              <p>работаем с УСН</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default InfoBlock;
