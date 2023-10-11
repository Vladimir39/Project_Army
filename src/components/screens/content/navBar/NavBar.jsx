import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setCatigoriesId,
  setCatigories,
} from "../../../../redux/slices/filterSlice";

import styles from "./NavBar.module.css";
function NavBar(props) {
  const dispatch = useDispatch();

  const onClickCatigoriesId = (id) => {
    dispatch(setCatigoriesId(id));
  };
  const onClickCatigories = (category) => {
    console.log("click");
    dispatch(setCatigories(category));
  };

  const itemsNavigashion = props.navItems.map((meal) => (
    <ul>
      <h3 onClick={() => onClickCatigoriesId(meal.id)}>{meal.titleName}</h3>
      {meal.categoryes.map((category, index) => (
        <li onClick={() => onClickCatigories(category)}>{category}</li>
      ))}
    </ul>
  ));

  const x = props.navItems.map((meal) => (
    <li>
      <p>{meal.titleName}</p>
      <ul>
        {meal.categoryes.map((category, index) => (
          <li className={styles.y} onClick={() => onClickCatigories(category)}>
            <p>{category}</p>
          </li>
        ))}
      </ul>
    </li>
  ));

  return (
    <>
      <div className={styles.navBar}>{itemsNavigashion}</div>
      <div className={styles.navBarAdaptive}>
        <nav className={styles.menu}>
          <ul>{x}</ul>
        </nav>
      </div>
    </>
  );
}

export default NavBar;
