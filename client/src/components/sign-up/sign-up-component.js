import React, { useState } from 'react';

//redux related
import { connect } from 'react-redux'
// actions
import { setAlert } from "../../actions/alert";
import { register } from "../../actions/auth";

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';


import { Link, Redirect } from "react-router-dom";

import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';

import Container from '@material-ui/core/Container';
import Copyrights from "../copyrights/copyrights.components";
import { useStyles } from "./styles";

import PropTypes from 'prop-types';



const SignUp = ({ setAlert, register, isAuthenticated }) => {
    const classes = useStyles();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        password2: ''
    });

    const { firstName, lastName, email, password, password2 } = formData;

    const onChange = e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    };

    const onSubmit = e => {
        e.preventDefault();
        if (password !== password2) {
            setAlert('password do not match', 'danger')
        } else {
            register({
                name: firstName + ' ' + lastName,
                email,
                password
            })
        }
    };

    //redirect if logged in
    if (isAuthenticated) {
        return <Redirect to='/' />
    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={ classes.paper }>
                <Avatar className={ classes.avatar }>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign up
                </Typography>
                <form className={ classes.form } onSubmit={ e => onSubmit(e) } >
                    <Grid container spacing={ 2 }>
                        <Grid item xs={ 12 } sm={ 6 }>
                            <TextField
                                onChange={ e => onChange(e) }
                                autoComplete="fname"
                                name="firstName"
                                variant="outlined"
                                required
                                fullWidth
                                id="firstName"
                                label="First Name"
                                value={ firstName }
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={ 12 } sm={ 6 }>
                            <TextField
                                onChange={ e => onChange(e) }
                                variant="outlined"
                                required
                                fullWidth
                                id="lastName"
                                label="Last Name"
                                name="lastName"
                                value={ lastName }
                                autoComplete="lname"
                            />
                        </Grid>
                        <Grid item xs={ 12 }>
                            <TextField
                                onChange={ e => onChange(e) }
                                variant="outlined"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                value={ email }
                                autoComplete="email"
                            />
                        </Grid>
                        <Grid item xs={ 12 }>
                            <TextField
                                onChange={ e => onChange(e) }
                                variant="outlined"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                value={ password }
                                autoComplete="current-password"
                            />
                        </Grid>
                        <Grid item xs={ 12 }>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="password2"
                                label="Confirm Password"
                                type="password"
                                id="password2"
                                value={ password2 }
                                autoComplete="current-password"
                                onChange={ e => onChange(e) }
                            />
                        </Grid>

                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={ classes.submit }
                    >
                        Sign Up
                    </Button>
                    <Grid container justify="center">
                        <Grid item>
                            <Link style={ {
                                color: "#3f51b5"
                            } } to="/signin">
                                { "Already have an account? Sign In" }
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
            <Box mt={ 5 }>
                <Copyrights />
            </Box>
        </Container>
    );
};

SignUp.propTypes = {
    setAlert: PropTypes.func.isRequired,
    register: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
};
// selecting state and pass it as prop
const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { setAlert, register })(SignUp);
