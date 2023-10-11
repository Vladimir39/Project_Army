import React from "react";

import styles from "./Content.module.css";
import NavBar from "./navBar/NavBar";
import ItemCard from "./itemCard/ItemCard";

function Content(props) {
  const itemsData = props.isLoading
    ? ""
    : props.items.map((meal) => (
        <ItemCard
          onClickModal={props.onClickModalCard}
          key={meal.id}
          id={meal.id}
          categories={meal.categories}
          description={meal.description}
          titleName={meal.titleName}
          price={meal.price}
          price1={meal.price1}
          amount={meal.amount}
        />
      ));

  return (
    <>
      <div className={styles.container}>
        <div className={styles.navBar}>
          <h2>Каталог</h2>
          <NavBar navItems={props.itemsNav} />
        </div>
        <div className={styles.itemCard}>{itemsData}</div>
      </div>
    </>
  );
}

export default Content;
