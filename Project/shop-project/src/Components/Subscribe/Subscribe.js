import React from "react";
export default class Subscribe extends React.Component {
  render() {
    return (
      <div className="subscribe">
        <div className="container">
          <div className="subscribe__content">
            <div className="subscribe__quote">
              <img
                src="/subscribe-image.svg"
                alt="Subscribe background"
                className="subscribe__quote-image"
              />
              <span className="subscribe__qoute-content">
                “Vestibulum quis porttitor dui! Quisque viverra nunc mi, a
                pulvinar purus condimentum“
              </span>
            </div>
            <div className="subscribe__info">
              <h3 className="subscribe__info-title">
                SUBSCRIBE
                <span className="subscribe__info-description">
                  FOR OUR NEWLETTER AND PROMOTION
                </span>
              </h3>
              <form action="#" className="subscribe__form">
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="subscribe__form-input"
                />
                <button
                  type="submit"
                  name="subscribe-button"
                  value="subscribe-button"
                  className="subscribe__form-button"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
