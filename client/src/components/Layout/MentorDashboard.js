import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

function MentorDashboard() {
  return (
    <div>
      <div>
        <Button color="inherit">
          <Link to="/mentors">Mentor DashBord</Link>
        </Button>
      </div>
    </div>
  );
}

MentorDashboard.propTypes = {};

export default MentorDashboard;
