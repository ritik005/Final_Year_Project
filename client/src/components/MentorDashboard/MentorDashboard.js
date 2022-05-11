import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

function MentorDashboard({ mentor: { mentor } }) {
  return (
    <div>
      <h3>Hey {mentor.first_name} Check Your Request Tab 😃</h3>
    </div>
  );
}

MentorDashboard.propTypes = {
  mentor: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  mentor: state.mentor
});

export default connect(mapStateToProps)(MentorDashboard);
