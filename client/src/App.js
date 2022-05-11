import React, { Fragment, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./components/Layout/Landing";
import Navbar from "./components/Layout/Navbar";
import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";
import Alerts from "./components/Layout/Alert";
import PrivateRoute from "./components/Routes/PrivateRoute";
import MentorRoute from "./components/Routes/MentorRoute";
import Dashboard from "./components/Dashboard/Dashboard";
import Profile from "./components/Profile/Profile";
import Mentors from "./components/Dashboard/Mentors";
import MentorProfle from "./components/MentorDashboard/MentorProfile";
// redux
import { Provider } from "react-redux";

import { loadUser } from "./actions/auth";
import { loadMentor } from "./actions/MentorAuth";

import store from "./store";
import MentorLanding from "./components/Mentor/MentorLanding";
import MentorForm from "./components/Mentor/MentorForm";
import Footer from "./components/Layout/Footer";
import MentorListMentors from "./components/ListMentors/ListMentors";
import MentorDashboard from "./components/MentorDashboard/MentorDashboard";
import MentorLogin from "./components/Mentor/MentorLogin";
import SingleProfile from "./components/ListMentors/SingleProfile";
import Update from "./components/Profile/Update";
import NotFound from "./components/Layout/404";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ApplyForm from "./components/Layout/ApplyForm";
import EditMentor from "./components/MentorDashboard/EditMentor";
import SearchPage from "./components/Filter/SearchResult";
import Request from "./components/MentorDashboard/Request";
import setAuthToken from "./utils/SetToken";
// import Category from "./components/Filter/Category"
import AboutUs from "./components/Layout/AboutUs";


function App() {
  useEffect(() => {
    setAuthToken(localStorage.token);
    store.dispatch(loadUser());
    store.dispatch(loadMentor());
  }, []);

  console.log();

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />

          <section className="container">
            <Alerts />
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/mentor" component={MentorLanding} />
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
              <PrivateRoute exact path="/mentee/profile" component={Profile} />
              <Route exact path="/mentor/apply" component={MentorForm} />
              <Route exact path="/mentor/find" component={MentorListMentors} />
              <Route exact path="/mentor/login" component={MentorLogin} />
              <MentorRoute
                exact
                path="/mentor/dashboard"
                component={MentorDashboard}
              />
              <MentorRoute
                exact
                path="/mentor/profile"
                component={MentorProfle}
              />
              <MentorRoute exact path="/edit/mentor" component={EditMentor} />
              {/* */}
              <Route
                exact
                path="/mentor/profile/:id"
                component={SingleProfile}
              />
              <PrivateRoute exact path="/mentee/edit" component={Update} />
              <PrivateRoute
                exact
                path="/mentee/auth/find"
                component={Mentors}
              />
              <Route
                exact
                path="/mentorship/apply/:name"
                component={ApplyForm}
              />
              <Route exact path="/search" component={SearchPage} />
              <PrivateRoute exact path="/search/auth" component={SearchPage} />
              <MentorRoute exact path="/request" component={Request} />
              {/* <Route exact path = "/mentor/:category" component = {Category}/> */}
              <Route exact path="/about" component={AboutUs} />
        

              <Route component={NotFound} />
            </Switch>
          </section>

          <Footer />
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;
