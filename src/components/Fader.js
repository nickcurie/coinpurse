import PropTypes from "prop-types";
import React from "react";

const Fader = ({ text, fadeProp, propId, textColor }) => {
  return (
    <>
      <p style={{ color: textColor }} id={propId} className={fadeProp.fade}>
        {text}
      </p>
    </>
  );
};

Fader.defaultProps = {
  text: "",
  textColor: "black",
};

Fader.propTypes = {
  text: PropTypes.string,
  textColor: PropTypes.string,
};

export default Fader;
