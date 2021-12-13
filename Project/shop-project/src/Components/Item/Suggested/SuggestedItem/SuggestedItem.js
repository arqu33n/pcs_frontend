import React from "react";
export default class SuggestedItem extends React.Component {
  static defaultProps = {
    image: "",
    title: "",
    description: "",
    price: "",
  };
  render() {
    const { image, title, description, price } = this.props;
    return (
      <div className="page__item">
        <div className="page__item-image">
          <img src={image} alt="Catalog" />
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
