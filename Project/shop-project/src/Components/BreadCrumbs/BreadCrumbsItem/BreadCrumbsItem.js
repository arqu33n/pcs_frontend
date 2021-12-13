import React from "react";
export default class BreadCrumbsItem extends React.Component {
  static defaultProps = {
    title: "",
    path: "",
  };
  render() {
    const { title, path } = this.props;
    return (
      <div className="category__breadcrumbs">
        <ul className="category__breadcrumbs-list" />
        <li>
          <a className="category__breadcrumbs-link" href={path}>
            {title}
          </a>
        </li>
      </div>
    );
  }
}
