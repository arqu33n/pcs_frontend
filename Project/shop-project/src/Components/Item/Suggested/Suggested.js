import React from "react";
import SuggestedItem from "./SuggestedItem/SuggestedItem";
import cards from "../../../API/Cards.json";
import { useParams } from "react-router-dom";
export default function Suggested() {
  let { id } = useParams();
  id = Number(id);
  const suggested = cards.filter((card) => card.id !== id).slice(0, 3);

  return (
    <div className="page">
      <div className="page container">
        {suggested.map((item) => {
          return (
            <SuggestedItem
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
  );
}
