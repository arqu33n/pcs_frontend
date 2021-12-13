import React from "react";
import BreadCrumbs from "../BreadCrumbs/BreadCrumbs";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Subscribe from "../Subscribe/Subscribe";
import SelectVariants from "./SelectItem/SelectVariants";
import Suggested from "./Suggested/Suggested";
import { StyledEngineProvider } from "@mui/material/styles";
import cards from "../../API/Cards.json";
export default class Item extends React.Component {
  render() {
    const card = cards.find((card) => card.id === 3);
    return (
      <div className="item">
        <Header />
        <BreadCrumbs />
        <div className="item__slider">
          <img
            src={card.image}
            alt="product slide"
            className="item__slider-content"
          />
        </div>
        <div className="container">
          <div className="item__details">
            <h1 className="item__collection">COLLECTION</h1>
            <div className="item__decor_pink"></div>
            <h2 className="item__title">{card.title}</h2>
            <span className="item__description">{card.description}</span>
            <span className="item__price">{card.price}</span>
            <div className="item__decor_gray"></div>
            <StyledEngineProvider injectFirst>
              <SelectVariants />
            </StyledEngineProvider>
            <button className="item__button" type="button" name="button">
              <img src="./item-button-card.svg" alt="add to cart" />
              Add to Cart
            </button>
          </div>
          <Suggested />
        </div>
        <Subscribe />
        <Footer />
      </div>
    );
  }
}
