import React from "react";
import { useSelector, useDispatch } from "react-redux";

import styles from "./ModalCard.module.css";

import imgCard from "../../../../img/test.png";
import ButtonOrder from "../../ui/buttonOreder/ButtonOrder";

function ModalCard({ close }) {
  const [data] = useSelector((state) => state.description.items);
  console.log(data);
  const dispatch = useDispatch();
  return (
    <>
      <div className={styles.modal} onClick={close}>
        <div
          className={styles.modalContent}
          onClick={(e) => e.stopPropagation()}
        >
          <div className={styles.description}>
            <div className={styles.descriptionBlock}>
              <h2>{data.titleName}</h2>
              <h3>{data.description}</h3>
            </div>
            <div className={styles.modalImgCard}>
              <img src={imgCard} />
              <ButtonOrder Children={"Заказать"} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ModalCard;
