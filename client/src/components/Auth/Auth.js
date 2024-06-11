import React, { useState, useEffect } from 'react'
import { Avatar, Paper, Grid, Container, Button, Typography } from '@material-ui/core';
import useStyles from './styles'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Input from './Input';
import GoogleLogin from 'react-google-login';
import { AUTH } from '../../constants/actionTypes';
// import { GoogleLogin } from '@react-oauth/google';
import Icon from './Icon';
import { gapi } from "gapi-script"
import { useDispatch } from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {signIn,signUp} from '../../actions/auth'

const initialFormState = {firstName:'',lastName:'',email:'',password:'',confirmPassword:''};

const Auth = () => {
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: '407213530600-ahpjn1vuckqurbp7e6iu3q07b45tdevm.apps.googleusercontent.com',
        scope: 'email',
      });
    }

    gapi.load('client:auth2', start);
  }, []);


  const [showPassword, setShowPassword] = useState(false)
  const [isSignUp, setIsSignUp] = useState(false)
  const [formData, setFormData] = useState(initialFormState)
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if(isSignUp){
      console.log("in Auth dispatching",formData);
      dispatch(signUp(formData,navigate))
    }else{
      dispatch(signIn(formData,navigate))
    }

  }
  const googleSuccess = async (res) => {
    const result = res?.profileObj;
    const token = res?.tokenId;
    try {
      dispatch({ type: AUTH , data: { result, token } })
      navigate('/')
    } catch (error) {
      console.log(error)
    }
    // console.log(res);
  }
  const googleFailure = (error) => {
    console.log(error)
    console.log("Google sign in was unsuccessful try again later")
  }
  const handleChange = (e) => {
    // console.log("handle Change calling for",e.target.name)
    // console.log("handle Change calling for whose values is",e.target.value)
    setFormData({...formData,[e.target.name]:e.target.value})
  }
  const switchMode = () => {
    setIsSignUp((prevIsSignUp) => !prevIsSignUp);
    setShowPassword(false)
  }
  const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword);

  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant='h5'>
          {isSignUp ? "Sign  Up" : "Sign In"}
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {
              isSignUp && (
                <>
                  <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half />
                  <Input name="lastName" label="Last Name" handleChange={handleChange} half />
                </>
              )
            }
            <Input name='email' handleChange={handleChange} label="Email Address" type="email" />
            <Input name='password' handleChange={handleChange} label="Password" type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword} />
            {isSignUp && <Input name='confirmPassword' handleChange={handleChange} label="Repeat Password" type="password" />}
          </Grid>
          <Button type='submit' fullWidth variant='contained' color="primary" className={classes.submit}>
            {isSignUp ? "Sign Up" : "Sign In"}
          </Button>
          <GoogleLogin
            clientId='407213530600-ahpjn1vuckqurbp7e6iu3q07b45tdevm.apps.googleusercontent.com'
            render={(renderProps) =>
              (<Button className={classes.googleButton} color="primary" fullWidth onClick={renderProps.onClick} startIcon={<Icon />} variant="contained">Google Sign In</Button>)}
            onSuccess={googleSuccess}
            onFailure={googleFailure}
            cookiePolicy='single_host_origin' />
          <Grid container justifyContent='flex-end'>
            <Grid item>
              <Button onClick={switchMode}>
                {isSignUp ? "Already have an account? Sign In" : "Don't have an account? Sign Up"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  )
}

export default Auth
