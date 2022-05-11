import React, { Fragment, useEffect } from "react";
import "../../../App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Alerts from "../../Layout/Alert";
import PrivateRoute from "../../Routes/PrivateRoute";

import Dashboard from "../../Dashboard/Dashboard";
import Profile from "../../Profile/Profile";
import Mentors from "../../Dashboard/Mentors";

// redux

import Update from "../../Profile/Update";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import SearchPage from "../../Filter/SearchResult";

const MenteeRouting = props => {
  return (
    <section className="container">
      <Alerts />
      <Switch>
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <PrivateRoute exact path="/mentee/profile" component={Profile} />
        <PrivateRoute exact path="/mentee/edit" component={Update} />
        <PrivateRoute exact path="/mentee/auth/find" component={Mentors} />
        <PrivateRoute exact path="/search/auth" component={SearchPage} />
      </Switch>
    </section>
  );
};

export default MenteeRouting;
