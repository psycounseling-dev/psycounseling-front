import React from "react";
import Card from "react-bootstrap/Card";
import PropTypes from "prop-types";
//import { Test } from './NewsCard.styles';

const NewsCard = ({ title, date, src, url, text }) => (
  <Card>
    <Card.Img variant="top" src={src ? src : "holder.js/100px180"} />
    <Card.Body>
      <Card.Text>{date}</Card.Text>
      <Card.Title>{title}</Card.Title>
      <Card.Text>{text}</Card.Text>
      <a href={url}>read more...</a>
    </Card.Body>
  </Card>
);

NewsCard.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  img: PropTypes.string,
};

NewsCard.defaultProps = {
  title: "test",
  date: "test",
  img: "test",
};

export default NewsCard;
