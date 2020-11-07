import React from "react";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";
import "./CardBlock.scss";

const CardBlock = ({
  header,
  bodybg,
  bodytext,
  footer,
  onClick,
  clickLabel,
  height,
}) => {
  const classes = `card-block-wrapper ${bodybg ? "with-bg" : ""}`;
  return (
    <div className={classes} style={{ height: height }}>
      <div class="card text-center" style={bodybg && { background: "none" }}>
        {bodybg && (
          <div
            className="card-body-bg"
            style={{ backgroundImage: `url(${bodybg})` }}
          ></div>
        )}
        {header && <div class="card-header">{header}</div>}
        <div class="card-body">
          {bodytext && <p>{bodytext}</p>}
          {onClick && (
            <Button
              className="crack-bootstrap no-border-rad"
              variant="info"
              onClick={onClick}
            >
              {clickLabel}
            </Button>
          )}
        </div>
        {footer && <div class="card-footer text-muted">{footer}</div>}
      </div>
    </div>
  );
};

CardBlock.propTypes = {
  // bla: PropTypes.string,
};

CardBlock.defaultProps = {
  // bla: 'test',
};

export default CardBlock;
