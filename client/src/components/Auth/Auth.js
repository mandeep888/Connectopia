import React,{useState} from 'react'
import { Avatar , Paper , Grid , Container ,Button , Typography } from '@material-ui/core';
import useStyles from './styles'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Input from './Input';

const Auth = () => {
  const [showPassword,setShowPassword] = useState(false)
    const classes = useStyles();
    const isSignUp = false;
    const handleSubmit = ()=>{

    }
    const handleChange = ()=>{

    }
    const handleShowPassword = ()=> setShowPassword((prevShowPassword)=> !prevShowPassword);

  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon/>
        </Avatar>
        <Typography variant='h5'>
          {isSignUp?"Sign  Up":"Sign In"}
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {
              isSignUp &&(
                <>
                <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half />
                <Input name="firstName" label="First Name" handleChange={handleChange}  half />
                </>
              )
            }
            <Input name='email' handleChange={handleChange} label="Email Address" type="email"/>
            <Input name='password' handleChange={handleChange} label="Password" type={showPassword?"text":"password"}  handleShowPassword={handleShowPassword}/>
            {isSignUp && <Input name='confirmPassword' handleChange={handleChange} label="Repeat Password" type="password"/>}
          </Grid>
          <Button type='submit' fullWidth variant='contained' color="primary" className={classes.submit}>
            {isSignUp?"Sign Up":"Sign In"}
          </Button>
        </form>
      </Paper>
    </Container>
  )
}

export default Auth
