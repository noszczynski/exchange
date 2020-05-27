import React, { useState } from "react";
import Slider from "@material-ui/core/Slider";
import Typography from "@material-ui/core/Typography";

function ThumbComponent(props) {
  return (
    <span {...props}>
      <span className="bar" />
      <span className="bar" />
      <span className="bar" />
    </span>
  );
}

function RangeSliderItem({ label, onChange }) {
  const [value, setValue] = useState([4.5, 5]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
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
        onChange={handleChange}
        min={1}
        max={5}
        value={value}
      />
    </div>
  );
}

export default RangeSliderItem;
