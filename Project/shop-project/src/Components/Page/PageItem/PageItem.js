import React from "react";
import { Link } from "react-router-dom";
export default class PageItem extends React.Component {
  static defaultProps = {
    id: "",
    image: "",
    title: "",
    description: "",
    price: "",
  };
  render() {
    const { image, title, description, price, id } = this.props;
    return (
      <div className="page__item">
        <div className="page__item-image">
          <Link to={`/Item/${id}`}>
            <img src={image} alt="Catalog" />
          </Link>
        </div>
        <h3 className="page__item-title">
          {title}
          <span className="page__item-description">{description}</span>
          <span className="page__item-price"> {price}</span>
        </h3>
      </div>
    );
  }
}
