import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import dumdata from "./../../data/dam_data";
import PropTypes from "prop-types";
import "./Eventslider.styles.scss";

const EventSlider = (props) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div className="event-slider-wrapper">
      <Carousel activeIndex={index} onSelect={handleSelect} controls={false}>
        {dumdata.jumbo.events.map((i) => (
          <Carousel.Item key={i.name} interval={3000}>
            <h3 className="title">{i.name}</h3>
            <p className="text">{i.text}</p>
            <p className="date">{i.date}</p>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

EventSlider.propTypes = {
  // bla: PropTypes.string,
};

EventSlider.defaultProps = {
  // bla: 'test',
};

export default EventSlider;
