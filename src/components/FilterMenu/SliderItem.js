import React from "react";
import Slider from "@material-ui/core/Slider";
import Typography from "@material-ui/core/Typography";
import { setStats } from "../../redux/actions";
import { connect } from "react-redux";

function SliderItem({ action, label, setStats }) {
  const handleChange = (e, value) => {
    setStats(action, value);
  };

  return (
    <div>
      <Typography gutterBottom>{label}</Typography>
      <Slider
        defaultValue={80}
        step={1}
        valueLabelDisplay="on"
        onChangeCommitted={handleChange}
        min={60}
        max={100}
      />
    </div>
  );
}

export default connect(null, { setStats })(SliderItem);
