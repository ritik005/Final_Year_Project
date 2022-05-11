import React, { Fragment, useEffect } from "react";
import "../../../App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Alerts from "../../Layout/Alert";
import MentorRoute from "../../Routes/MentorRoute";
import MentorProfle from "../../MentorDashboard/MentorProfile";
import MentorDashboard from "../../MentorDashboard/MentorDashboard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import EditMentor from "../../MentorDashboard/EditMentor";
import Request from "../../MentorDashboard/Request";

const MentorRouting = props => {
  return (
    <section className="container">
      <Alerts />
      <Switch>
        <MentorRoute
          exact
          path="/mentor/dashboard"
          component={MentorDashboard}
        />
        <MentorRoute exact path="/mentor/profile" component={MentorProfle} />
        <MentorRoute exact path="/edit/mentor" component={EditMentor} />
        <MentorRoute exact path="/request" component={Request} />
      </Switch>
    </section>
  );
};

export default MentorRouting;
