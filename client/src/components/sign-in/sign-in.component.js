import React, { Component, useState, useEffect } from "react";
import FormInput from "../form-input/form-input.component";

// Sign in with google
import { signInWithGoogle, auth } from "../../utils/firebase";

// import { signInWithGoogle } from '../../utils/firebase'
//redux related
import { connect } from "react-redux";
import { setAlert } from "../../actions/alert";
import { loginWithGoogle } from "../../actions/auth";

import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
//import Link from '@material-ui/core/Link';
import { Link, Redirect } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Copyrights from "../copyrights/copyrights.components";
import { useStyles } from "./styles";
import PropTypes from "prop-types";
import { login } from "../../actions/auth";

const SignIn = ({ login, isAuthenticated, loginWithGoogle }) => {
  const classes = useStyles();
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const { email, password } = formData;

  const onChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const onSubmit = e => {
    e.preventDefault();
    login(email, password);
  };
  const onSignInWithGoogle = () => {
    signInWithGoogle().then(data => {
      auth.onAuthStateChanged(user => {
        loginWithGoogle(user);
        console.log(user);
      });
    });
  };
  //redirect if logged in
  if (isAuthenticated) {
    return <Redirect to="/" />;
  }
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form onSubmit={e => onSubmit(e)} className={classes.form} noValidate>
          <TextField
            value={email}
            onChange={e => onChange(e)}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            value={password}
            onChange={e => onChange(e)}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          {/*<FormControlLabel*/}
          {/*    control={<Checkbox value="remember" color="primary" />}*/}
          {/*    label="Remember me"*/}
          {/*/>*/}
          <Button
            onSubmit={e => onSubmit(e)}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Button
            onClick={onSignInWithGoogle}
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In With Google
          </Button>
          <Grid container justify="center">
            {/*<Grid item xs>*/}
            {/*    <Link href="#" variant="body2">*/}
            {/*        Forgot password?*/}
            {/*    </Link>*/}
            {/*</Grid>*/}
            <Grid item>
              <Link
                style={{
                  color: "#3f51b5"
                }}
                to="/signup"
              >
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyrights />
      </Box>
    </Container>
  );
};

SignIn.propTypes = {
  setAlert: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { setAlert, login, loginWithGoogle })(
  SignIn
);
