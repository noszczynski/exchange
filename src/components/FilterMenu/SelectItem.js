import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import withStyles from "@material-ui/core/styles/withStyles";
import green from "@material-ui/core/colors/green";

function SelectItem({ label, checked }) {
  const ColoredCheckbox = withStyles({
    root: {
      color: green[100],
      "&$checked": {
        color: green[800],
      },
    },
    checked: {},
  })((props) => (
    <Checkbox
      color="#9ef70b"
      value={label}
      inputProps={{ "aria-label": label }}
      {...props}
    />
  ));

  return (
    <div>
      <FormControlLabel
        control={<ColoredCheckbox checked={checked} name={label} />}
        label={label}
      />
    </div>
  );
}

export default SelectItem;
