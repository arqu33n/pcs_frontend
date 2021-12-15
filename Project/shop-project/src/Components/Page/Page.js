import React from "react";
import PageItem from "./PageItem/PageItem";
import cards from "../../API/Cards.json";
import Header from "../Header/Header";
import BreadCrumbs from "../BreadCrumbs/BreadCrumbs";
import Advantages from "../Advantages/Advantages";
import Footer from "../Footer/Footer";

export default class Page extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <BreadCrumbs />
        <div className="page">
          <div className="page container">
            {cards.map((item) => {
              return (
                <PageItem
                  id={item.id}
                  key={item.id}
                  image={item.image}
                  title={item.title}
                  description={item.description}
                  price={item.price}
                />
              );
            })}
          </div>
        </div>
        <Advantages />
        <Footer />
      </div>
    );
  }
}
