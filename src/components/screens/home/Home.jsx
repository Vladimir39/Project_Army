import React, { useEffect, useState, useRef } from "react";
import axios from "axios";

import Header from "../header/Header";
import InfoBlock from "../InfoBlock/InfoBlock";
import Footer from "../footer/Footer";
import Content from "../content/Content";
import ModalCard from "../modalCard/ModalCard";
import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";

import styles from "./Home.module.css";
import Basket from "../basket/Basket";
function Home() {
  const { categoryId, categories } = useSelector((state) => state.filter);
  const [navigashion, setNavigashion] = useState([]);
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [modal, setModal] = useState(false);
  const contactsRef = useRef(null);
  const catalogsRef = useRef(null);

  const scrollToContacts = () => {
    if (contactsRef.current) {
      contactsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToCatalogs = () => {
    if (catalogsRef.current) {
      catalogsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const x = categoryId != "" ? "categoryId" : "categories";
  const y = categoryId != "" ? categoryId : categories;

  useEffect(() => {
    axios
      .get("https://648a28de5fa58521cab0f109.mockapi.io/army_catalogs")
      .then((arr) => {
        setNavigashion(arr.data);
      });
  }, []);
  useEffect(() => {
    axios
      .get(`https://648a28de5fa58521cab0f109.mockapi.io/army?${x}=` + y)
      .then((arr) => {
        setItems(arr.data);
        setIsLoading(false);
      });
  }, [categoryId, categories]);

  const onClickModalOn = () => {
    setModal(true);
  };
  const onClickModalOff = () => {
    setModal(false);
  };

  return (
    <>
      <div className={styles.home}>
        {modal && <ModalCard close={onClickModalOff} />}
        <Header
          onClickContacts={scrollToContacts}
          onClickCatalogs={scrollToCatalogs}
        />

        <Routes>
          <Route
            key="main"
            path="/"
            element={
              <>
                <InfoBlock />
                <div ref={catalogsRef} id="catalogs">
                  <Content
                    onClickModalCard={onClickModalOn}
                    itemsNav={navigashion}
                    items={items}
                    isLoading={isLoading}
                  />
                </div>
              </>
            }
          />
          <Route path="/basket" element={<Basket />} />
        </Routes>
        <div ref={contactsRef} id="contacts">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Home;
