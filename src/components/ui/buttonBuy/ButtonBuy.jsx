import React from "react";

import styles from "./ButtonBuy.module.css";

function ButtonBuy({ Children, onClick }) {
  return (
    <>
      <div className={styles.button}>
        <div className={styles.buttonClick}>
          <button>
            <h3>{Children}</h3>
          </button>
        </div>
      </div>
    </>
  );
}

export default ButtonBuy;
