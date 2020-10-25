import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import dumdata from "./../../data/dam_data";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PropTypes from "prop-types";
import "./Jumbo.scss";
import EventSlider from "./../EventSlider";

const Jumbo = (props) => (
  <div className="jumbo-wrapper">
    <Container>
      <Row md={4}>
        <Col md={6} className="left-col">
          {" "}
          <Jumbotron>
            <h1>{dumdata.jumbo.title}</h1>
            <p>{dumdata.jumbo.text}</p>
            <p>
              {dumdata.jumbo.buttons.map((i) => (
                <Button key={i.id} variant="outline-info">
                  {i.label}
                </Button>
              ))}
            </p>
          </Jumbotron>
        </Col>

        <Col md={6}>
          <EventSlider />
        </Col>
      </Row>
    </Container>
  </div>
);

Jumbo.propTypes = {
  // bla: PropTypes.string,
};

Jumbo.defaultProps = {
  // bla: 'test',
};

export default Jumbo;
