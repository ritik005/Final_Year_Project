import React, { Fragment, useEffect, useState } from "react";
import { connect } from "react-redux";
import { getProfiles } from "../../actions/Profile";
import PropTypes from "prop-types";
import Spinner from "../Layout/Spinner";
import Slider from "./Carousel";

function ListMentor({ getProfiles, profile: { profiles, loading } }) {
  useEffect(() => {
    getProfiles();
  }, [getProfiles]);

  return (
    <div>
      <h2>Feature Mentor</h2>

      <Fragment>
        <div className="profiles">
          {profiles.length > 0 ? (
            profiles.map(profile => (
              <Slider key={profile._id} profile={profile} />
            ))
          ) : (
            <h4>No profiles found...</h4>
          )}
        </div>
      </Fragment>
    </div>
  );
}
ListMentor.propTypes = {
  getProfiles: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(mapStateToProps, { getProfiles })(ListMentor);
