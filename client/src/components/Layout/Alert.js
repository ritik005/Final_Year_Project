import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Alert from "@material-ui/lab/Alert";

const Alerts = ({ validations }) =>
  validations !== null &&
  validations.length > 0 &&
  validations.map(alert => (
    <div style={{ marginTop: "10px" }}>
      <Alert severity={`${alert.validationType}`}>{alert.msg}</Alert>
    </div>
  ));

Alerts.propTypes = {
  validations: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  validations: state.validation
});

export default connect(mapStateToProps)(Alerts);
