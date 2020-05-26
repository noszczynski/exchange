import React from "react";
import Slider from "@material-ui/core/Slider";
import Typography from "@material-ui/core/Typography";

function SliderItem({ label, onChange }) {
  return (
    <div>
      <Typography gutterBottom>{label}</Typography>
      <Slider
        defaultValue={80}
        step={1}
        valueLabelDisplay="on"
        onChange={onChange}
        min={60}
        max={100}
      />
    </div>
  );
}

export default SliderItem;
