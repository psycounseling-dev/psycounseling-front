import React from "react";
import PropTypes from "prop-types";
import CardBlock from "../CardBlock/CardBlock";
import bg_action1 from "./../../assets/img/bg_action1.png";
import "./ActionContainer.scss";

const ActionContainer = (props) => (
  <section className="section-block action-container py-5">
    <div className="action-container-wrapper">
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-sm-12">
            <CardBlock
              height={400}
              header={null}
              bodybg={bg_action1}
              bodytext={"body text is fany"}
              footer={null}
              clickLabel={"More info"}
              onClick={() => {}}
            ></CardBlock>
          </div>
          <div className="col-md-4 col-sm-12">
            <CardBlock
              height={400}
              header={null}
              bodybg={bg_action1}
              bodytext={"body text is fany"}
              footer={null}
              clickLabel={"More info"}
              onClick={() => {}}
            ></CardBlock>
          </div>
          <div className="col-md-4 col-sm-12">
            <CardBlock
              height={400}
              header={null}
              bodybg={bg_action1}
              bodytext={"body text is fany"}
              footer={null}
              clickLabel={"More info"}
              onClick={() => {}}
            ></CardBlock>
          </div>
        </div>
      </div>
    </div>
  </section>
);

ActionContainer.propTypes = {
  // bla: PropTypes.string,
};

ActionContainer.defaultProps = {
  // bla: 'test',
};

export default ActionContainer;
