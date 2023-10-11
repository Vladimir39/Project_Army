import React from "react";

import styles from "./ButtonOrder.module.css";

function ButtonOrder({ Children, onClick }) {
  return (
    <>
      <div className={styles.button}>
        <div className={styles.buttonClick}>
          <button onClick={onClick}>
            <h3>{Children}</h3>
          </button>
        </div>
      </div>
    </>
  );
}

export default ButtonOrder;
