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

const UserDetails = ({ auth: { user } }) => {
  return (
    <Card small className="mb-4 pt-3">
      <CardHeader className="border-bottom text-center">
        <img
          src={user && user.avatar}
          style={{ heigh: "96px", width: "96px", borderRadius: "50%" }}
        />
        <span className="text-muted d-block mb-2">{user && user.name}</span>
        <Link to="/mentee/edit">
          <Button pill outline size="sm" className="mb-2">
            <i className="material-icons mr-1">Edit</i> Profile
          </Button>
        </Link>
      </CardHeader>
      <ListGroup flush>
        <ListGroupItem className="p-4">
          Email
          <strong className="text-muted d-block mb-2">
            {user && user.email}
          </strong>
        </ListGroupItem>
        <ListGroupItem className="p-4">
          Bio:
          <strong className="text-muted d-block mb-2">
            {user && user.bio}
          </strong>
        </ListGroupItem>
      </ListGroup>
    </Card>
  );
};

UserDetails.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.register
});

export default connect(mapStateToProps)(UserDetails);
