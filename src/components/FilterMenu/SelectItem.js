import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import withStyles from "@material-ui/core/styles/withStyles";
import green from "@material-ui/core/colors/green";
import { connect } from "react-redux";
import { setSelect } from "../../redux/actions";
import PropTypes from "prop-types";

function SelectItem({ label, action, setSelect, LEAGUE }) {
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
      value={label}
      inputProps={{ "aria-label": label }}
      onChange={({ target: { checked } }) => setSelect(action, checked)}
      {...props}
    />
  ));

  return (
    <div>
      <FormControlLabel
        control={
          <ColoredCheckbox checked={LEAGUE && LEAGUE[action]} name={label} />
        }
        label={label}
      />
    </div>
  );
}

SelectItem.propTypes = {
  LEAGUE: PropTypes.object,
};

SelectItem.defaultProps = {
  LEAGUE: {},
};

const mapStateToProps = (appState) => ({
  LEAGUE: appState.LEAGUE,
});

export default connect(mapStateToProps, { setSelect })(SelectItem);
