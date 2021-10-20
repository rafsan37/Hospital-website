import React from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import "./login.css"

const Login = () => {
    const {singInUsingGoogle, signInWithEmail,setUser,setError, getUserPassword, getUserEmail} = useAuth();
    const location = useLocation();
    const history = useHistory();

    const redirect_uri = location.state?.from || '/home';
    const handleGoogleLogin = () => {
        singInUsingGoogle()
        .then(result => {
            history.push(redirect_uri);
        });
    }
    return (
        <div className="container text-center">

            <div className="my-5">
            <div className="login-form">
    <form>
        <h2 className="text-center my-3">Log in</h2>   
        <div className="form-group">
        	<div className="input-group my-3">
                <div className="input-group-prepend">
                    <span className="input-group-text">
                        <span className="fa fa-user py-1"></span>
                    </span>                    
                </div>
                      <input onBlur={getUserEmail} type="text" className="form-control" name="useremail" placeholder="Enter your Email" required="required"/>	
            	</div>
        </div>
		<div className="form-group">
            <div className="input-group ">
                <div className="input-group-prepend">
                    <span className="input-group-text">
                        <i className="fa fa-lock py-1"></i>
                    </span>                    
                </div>
                <input onBlur={getUserPassword} type="password" className="form-control" name="password" placeholder="Password" required="required"/>				
            </div>
        </div>        
        <div className="form-group">
            <button type="submit" onClick={(e)=>{
                e.preventDefault()
                signInWithEmail()
                .then(result => {
                    setUser(result.user)
                    history.push(redirect_uri);
                }).catch((err) => {
                    setError(err.message)
                })
            }} className="btn btn-primary login-btn btn-block">Log in</button>
        </div>
        <div className="clearfix">
            <label className="float-left form-check-label"><input type="checkbox"/> Remember me</label>
            <NavLink to="#" className="float-right">Forgot Password?</NavLink>
        </div>
		<div className="or-seperator"><i>or</i></div>
        <p className="text-center">Login with Google</p>
        <div className="text-center social-btn">
        <button onClick={handleGoogleLogin} className="btn btn-danger"><i className="fa fa-google"></i>&nbsp; Google</button>
			
        </div>
    </form>
    <p className="text-center text-muted small">Don't have an account? <NavLink to="/signup">Sign up here!</NavLink></p>
</div>
    </div>
  </div>
    );
};

export default Login;