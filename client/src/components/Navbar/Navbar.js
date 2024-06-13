import React, { useState , useEffect } from 'react'
import {Link, useLocation, useNavigate} from "react-router-dom";
import {  AppBar,Typography,Toolbar, Avatar, Button} from '@material-ui/core'
import useStyles from './styles'
import memoriesLogo from "../../images/memoriesLogo.png"
import ConnectopiaText from "../../images/Connectopia_text.png"
import { useDispatch } from 'react-redux';
import { LOGOUT } from '../../constants/actionTypes';
import  { jwtDecode }  from 'jwt-decode';
const Navbar = () => {
    const classes = useStyles()
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const [user,setUser] =useState(JSON.parse(localStorage.getItem('profile'))); 
    const logout = () => {
        dispatch({ type: LOGOUT});
        navigate('/');
        setUser(null);
    }
    useEffect(() => {
        const token = user?.token;
    
        if (token) {
          const decodedToken = jwtDecode(token);
    
          if (decodedToken.exp * 1000 < new Date().getTime()) logout();
        }
    
        setUser(JSON.parse(localStorage.getItem('profile')));
      }, [location]);
      
    return (
        <AppBar className={classes.appBar} position='static' color='inherit'>
            <Link to="/" className={classes.brandContainer}>
            <img component={Link} to="/" src={ConnectopiaText} alt="icon" height="55px" />
            <img className={classes.image} src={memoriesLogo} alt="icon" height="40px" />
            </Link>
            <Toolbar className={classes.toolBar}>
                {user?(
                    <div className={classes.profile}>
                         <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar>
                         <Typography className={classes.userName} variant='h6'>{user.result.name}</Typography>
                         <Button variant='contained' className={classes.logout} color='secondary' onClick={logout}>Logout</Button>
                          </div>
                ):(
                    <Button component={Link} to="/auth" variant='contained' color='primary'> Sign In</Button>
                )}
            </Toolbar>
        </AppBar>
    )
}

export default Navbar
