import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  Button,
  ListGroup,
  ListGroupItem
} from "shards-react";
import { connect } from "react-redux";

const UserDetails = ({ mentor: { mentor } }) => {
  return (
    <Card small className="mb-4 pt-3">
      <CardHeader className="border-bottom text-center">
        <img
          src={mentor.avatar}
          style={{ heigh: "96px", width: "96px", borderRadius: "50%" }}
        />

        <h4 className="mb-0">{mentor.first_name}</h4>
        <span className="text-muted d-block mb-2">{mentor.job_title}</span>
        <Link to="/edit/mentor">
          <Button pill outline size="sm" className="mb-2">
            <i className="material-icons mr-1">Edit</i> Profile
          </Button>
        </Link>
      </CardHeader>
      <ListGroup flush>
        <ListGroupItem className="px-4">
          <div className="progress-wrapper">
            Education
            <strong className="text-muted d-block mb-2">
              {mentor.highest_eduction}
            </strong>
          </div>
        </ListGroupItem>
        <ListGroupItem className="p-4">
          Email
          <strong className="text-muted d-block mb-2">{mentor.email}</strong>
        </ListGroupItem>
        <ListGroupItem className="p-4">
          Bio:
          <strong className="text-muted d-block mb-2">{mentor.bio}</strong>
        </ListGroupItem>
        <ListGroupItem className="p-4">
          Location:
          <strong className="text-muted d-block mb-2">{mentor.location}</strong>
        </ListGroupItem>
        <ListGroupItem className="p-4">
          Monthly Fee
          <strong className="text-muted d-block mb-2">
            {mentor.monthly_fee}
          </strong>
        </ListGroupItem>
      </ListGroup>
    </Card>
  );
};

UserDetails.propTypes = {
  mentor: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  mentor: state.mentor
});

export default connect(mapStateToProps)(UserDetails);
