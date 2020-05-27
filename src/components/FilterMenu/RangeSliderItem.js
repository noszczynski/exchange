import React from "react";
import Slider from "@material-ui/core/Slider";
import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";
import { setStars } from "../../redux/actions";
import PropTypes from "prop-types";

function RangeSliderItem({ label, STARS, setStars }) {
  const handleSliderChange = (event, value) => {
    if (value !== STARS) {
      setStars(value);
    }
  };

  return (
    <div>
      <Typography id="range-slider" gutterBottom>
        {label}
      </Typography>
      <Slider
        defaultValue={5}
        step={0.5}
        valueLabelDisplay="on"
        onChange={handleSliderChange}
        min={1}
        max={5}
        value={STARS}
      />
    </div>
  );
}

RangeSliderItem.propTypes = {
  STARS: PropTypes.arrayOf(PropTypes.number),
};

RangeSliderItem.defaultProps = {
  STARS: [],
};

const mapStateToProps = (appState) => ({
  STARS: appState.STARS,
});

export default connect(mapStateToProps, { setStars })(RangeSliderItem);
