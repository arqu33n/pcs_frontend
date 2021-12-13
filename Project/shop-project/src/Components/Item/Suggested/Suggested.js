import React from "react";
import SuggestedItem from "./SuggestedItem/SuggestedItem";
export default class Suggested extends React.Component {
  render() {
    const suggested = [
      {
        image: "./page-item-image-1.svg",
        title: "ELLERY X M'O CAPSULE",
        description:
          " Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
        price: "$52.00",
      },
      {
        image: "./page-item-image-2.svg",
        title: "ELLERY X M'O CAPSULE",
        description:
          " Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
        price: "$52.00",
      },
      {
        image: "./page-item-image-3.svg",
        title: "ELLERY X M'O CAPSULE",
        description:
          " Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
        price: "$52.00",
      },
    ];
    return (
      <div className="page">
        <div className="page container">
          {suggested.map((item) => {
            return (
              <SuggestedItem
                key={item.title}
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
