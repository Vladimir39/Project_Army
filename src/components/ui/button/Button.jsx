import React, { Children } from "react";

import styles from "./Button.module.css";
function Button({ Children, onClick }) {
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
export default Button;
