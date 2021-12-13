import React from "react";
import SuggestedItem from "./SuggestedItem/SuggestedItem";
import cards from "../../../API/Cards.json";
export default class Suggested extends React.Component {
  render() {
    const suggested = cards.slice(4, 7);

    return (
      <div className="page">
        <div className="page container">
          {suggested.map((item) => {
            return (
              <SuggestedItem
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
    );
  }
}
