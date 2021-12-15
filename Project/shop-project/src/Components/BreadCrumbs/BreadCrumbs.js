import React from "react";
import BreadCrumbsItem from "./BreadCrumbsItem/BreadCrumbsItem";

export default class BreadCrumbs extends React.Component {
  render() {
    const BreadCrumbs = [
      {
        title: "HOME",
        path: "/",
      },
      {
        title: "NEW ARRIVALS",
        path: "/Page",
      },
    ];
    return (
      <div className="category">
        <div className="category container ">
          <div className="category__title">NEW ARRIVALS</div>
          <div className="category__breadcrumbs">
            {BreadCrumbs.map((item) => {
              return (
                <BreadCrumbsItem
                  key={item.title}
                  title={item.title}
                  path={item.path}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
