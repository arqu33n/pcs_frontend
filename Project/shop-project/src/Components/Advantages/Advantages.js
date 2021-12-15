import React from "react";
export default class Advantages extends React.Component {
  render() {
    return (
      <div className="advantages">
        <div className="container">
          <div className="advantages__content">
            <section className="advantages__item">
              <img
                src="/advantages-icon-1.svg"
                alt="Delivery icon"
                className="advantages__item-icon"
              />
              <h3 className="advantages__item-title">
                Free Delivery
                <span className="advantages__item-description">
                  Worldwide delivery on all. Authorit tively morph
                  next-generation innov tion with extensive models.
                </span>
              </h3>
            </section>
            <section className="advantages__item">
              <img
                src="/advantages-icon-2.svg"
                alt="Sales icon"
                className="advantages__item-icon"
              />
              <h3 className="advantages__item-title">
                Sales & discounts
                <span className="advantages__item-description">
                  Worldwide delivery on all. Authorit tively morph
                  next-generation innov tion with extensive models.
                </span>
              </h3>
            </section>
            <section className="advantages__item">
              <img
                src="/advantages-icon-3.svg"
                alt="Quality icon"
                className="advantages__item-icon"
              />
              <h3 className="advantages__item-title">
                Quality assurance
                <span className="advantages__item-description">
                  Worldwide delivery on all. Authorit tively morph
                  next-generation innov tion with extensive models.
                </span>
              </h3>
            </section>
          </div>
        </div>
      </div>
    );
  }
}
