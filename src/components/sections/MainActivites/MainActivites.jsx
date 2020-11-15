import React from "react";
import PropTypes from "prop-types";
import "./MainActivites.scss";

const MainActivites = ({ list, title }) => (
  <section className="section-block main-activites">
    <div className="container">
      <div className="activites-list">
        <div className="title-default">{title && title}</div>
        <ul>{list && list.map((li, idx) => <li key={idx}>{li}</li>)}</ul>
      </div>
    </div>
  </section>
);

MainActivites.propTypes = {
  // bla: PropTypes.string,
};

MainActivites.defaultProps = {
  // bla: 'test',
};

export default MainActivites;
