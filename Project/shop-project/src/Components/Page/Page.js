import React from "react";
import PageItem from "./PageItem/PageItem";
export default class Page extends React.Component {
  render() {
    const page = [
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
      {
        image: "./page-item-image-4.svg",
        title: "ELLERY X M'O CAPSULE",
        description:
          " Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
        price: "$52.00",
      },
      {
        image: "./page-item-image-5.svg",
        title: "ELLERY X M'O CAPSULE",
        description:
          " Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
        price: "$52.00",
      },
      {
        image: "./page-item-image-6.svg",
        title: "ELLERY X M'O CAPSULE",
        description:
          " Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
        price: "$52.00",
      },
      {
        image: "./page-item-image-7.svg",
        title: "ELLERY X M'O CAPSULE",
        description:
          " Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
        price: "$52.00",
      },
      {
        image: "./page-item-image-8.svg",
        title: "ELLERY X M'O CAPSULE",
        description:
          " Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
        price: "$52.00",
      },
      {
        image: "./page-item-image-9.svg",
        title: "ELLERY X M'O CAPSULE",
        description:
          " Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
        price: "$52.00",
      },
    ];
    return (
      <div className="page">
        <div className="page container">
          {page.map((item) => {
            return (
              <PageItem
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
