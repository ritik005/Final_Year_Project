import React, { Fragment, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";
import { mentorLogout } from "../../actions/MentorAuth";
import Avatar from "@material-ui/core/Avatar";
import KeyboardArrowDownSharpIcon from "@material-ui/icons/KeyboardArrowDownSharp";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import logo from "../../image/logo3.png";
import Badge from "@material-ui/core/Badge";
import { withStyles } from "@material-ui/core/styles";

// Redux
import { connect } from "react-redux";

// style
const StyledBadge = withStyles(theme => ({
  badge: {
    right: -3,
    top: 0,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px"
  }
}))(Badge);

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

function Navbar({
  register: { isAuthenticated, loading, user },
  logout,
  mentor: { misAuthenticated, mentor },
  length
}) {
  console.log(length);
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState(null);
  const [state, setstate] = useState();
  function handleClick(event) {
    if (anchorEl !== event.currentTarget) {
      setAnchorEl(event.currentTarget);
    }
  }

  function handleClose() {
    setAnchorEl(null);
  }

  // After Login Navbar
  const authLinks = (
    <div>
      {mentor && mentor.type ? (
        <Fragment>
          <Button color="inherit">
            <Link to="/request">
              mentee's Request{" "}
              <StyledBadge
                badgeContent={length}
                color="secondary"
              ></StyledBadge>
            </Link>
          </Button>

          <Button
            color="inherit"
            aria-owns={anchorEl ? "simple-menu" : null}
            aria-haspopup="true"
            onClick={handleClick}
            onMouseOver={handleClick}
          >
            <Avatar alt="Remy Sharp" src={mentor && mentor.avatar} />
            <KeyboardArrowDownSharpIcon />
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            MenuListProps={{ onMouseLeave: handleClose }}
          >
            <MenuItem onClick={handleClose}>
              <Link style={{ color: "black" }} to="/mentor/profile">
                Profile
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <a
                onClick={logout}
                href="/mentor/login"
                style={{ color: "black" }}
              >
                Logout
              </a>
            </MenuItem>
          </Menu>
        </Fragment>
      ) : (
        <Fragment>
          <Button color="inherit">
            <Link to="/dashboard">Dashboard</Link>
          </Button>
          <Button color="inherit">
            <Link to="/mentee/auth/find">Find Mentor</Link>
          </Button>

          <Button
            color="inherit"
            aria-owns={anchorEl ? "simple-menu" : null}
            aria-haspopup="true"
            onClick={handleClick}
            onMouseOver={handleClick}
          >
            <Avatar alt="Remy Sharp" src={user && user.avatar} />
            <KeyboardArrowDownSharpIcon />
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            MenuListProps={{ onMouseLeave: handleClose }}
          >
            <MenuItem onClick={handleClose}>
              <Link style={{ color: "black" }} to="/mentee/profile">
                Profile
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <a onClick={logout} href="/login" style={{ color: "black" }}>
                Logout
              </a>
            </MenuItem>
          </Menu>
        </Fragment>
      )}
    </div>
  );

  const guestLinks = (
    <div>
      <Button
        color="inherit"
        aria-owns={anchorEl ? "simple-menu" : null}
        aria-haspopup="true"
        onClick={handleClick}
        onMouseOver={handleClick}
      >
        <Link to="/mentor">Find mentor</Link>
        <KeyboardArrowDownSharpIcon />
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        MenuListProps={{ onMouseLeave: handleClose }}
      >
        <MenuItem onClick={handleClose}>
          <Link style={{ color: "black" }} to="/search/?q=JEE">
            JEE MENTOR
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link style={{ color: "black" }} to="/search/?q=GATE">
            GATE MENTOR
          </Link>
        </MenuItem>
      </Menu>
      <Button color="inherit">
        <Link to="/login">Login</Link>
      </Button>
      <Button color="inherit">
        <Link to="/register">Register</Link>
      </Button>
    </div>
  );

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className="">
        <Toolbar className="navbar bg-dark">
          <Typography variant="h6" className={classes.title}>
            <Link to="/">
              <img
                src={logo}
                style={{ maxWidth: "50px", borderStyle: "none", border: "0" }}
              />
            </Link>
          </Typography>

          <Fragment>
            {isAuthenticated || misAuthenticated ? authLinks : guestLinks}
          </Fragment>
        </Toolbar>
      </AppBar>
    </div>
  );
}

Navbar.propTypes = {
  register: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired,
  mentor: PropTypes.object.isRequired,
  mentorLogout: PropTypes.func.isRequired,
  type: PropTypes.string
};

const mapStateToProps = state => ({
  register: state.register,
  mentor: state.mentor,
  misAuthenticated: state.mentor.misAuthenticated
});

export default connect(mapStateToProps, { logout, mentorLogout })(Navbar);
