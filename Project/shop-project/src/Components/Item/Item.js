import React from "react";
import BreadCrumbs from "../BreadCrumbs/BreadCrumbs";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Subscribe from "../Subscribe/Subscribe";
import SelectVariants from "./SelectItem/SelectVariants";
import Suggested from "./Suggested/Suggested";
import { StyledEngineProvider } from "@mui/material/styles";
export default class Item extends React.Component {
  render() {
    return (
      <div className="item">
        <Header />
        <BreadCrumbs />
        <div className="item__slider">
          <img
            src="./item-slide.png"
            alt="product slide"
            className="item__slider-content"
          />
        </div>
        <div className="container">
          <div className="item__details">
            <h1 className="item__collection">WOMEN COLLECTION</h1>
            <div className="item__decor_pink"></div>
            <h2 className="item__title">MOSCHINO CHEAP AND CHIC</h2>
            <span className="item__description">
              Compellingly actualize fully researched processes before proactive
              outsourcing. Progressively syndicate collaborative architectures
              before cutting-edge services. Completely visualize parallel core
              competencies rather than exceptional portals.
            </span>
            <span className="item__price">$561</span>
            <div className="item__decor_gray"></div>
            <StyledEngineProvider injectFirst>
              <SelectVariants />
            </StyledEngineProvider>
            <button className="item__button" type="button" name="button">
              <img src="./item-button-card.svg" />
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
