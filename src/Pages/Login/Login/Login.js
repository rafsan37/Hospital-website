import React from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import "./login.css"

const Login = () => {
    const {singInUsingGoogle, signInWithEmail} = useAuth();
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

            <div>
            <div className="login-form">
    <form action="/examples/actions/confirmation.php" method="post">
        <h2 className="text-center">Log in</h2>   
        <div className="form-group">
        	<div className="input-group">
                <div className="input-group-prepend">
                    <span className="input-group-text">
                        <span className="fa fa-user"></span>
                    </span>                    
                </div>
                <input type="text" className="form-control" name="username" placeholder="Username" required="required"/>				
            </div>
        </div>
		<div className="form-group">
            <div className="input-group">
                <div className="input-group-prepend">
                    <span className="input-group-text">
                        <i className="fa fa-lock"></i>
                    </span>                    
                </div>
                <input type="password" className="form-control" name="password" placeholder="Password" required="required"/>				
            </div>
        </div>        
        <div className="form-group">
            <button type="submit" onClick={signInWithEmail} className="btn btn-primary login-btn btn-block">Log in</button>
        </div>
        <div className="clearfix">
            <label className="float-left form-check-label"><input type="checkbox"/> Remember me</label>
            <NavLink to="#" className="float-right">Forgot Password?</NavLink>
        </div>
		<div className="or-seperator"><i>or</i></div>
        <p className="text-center">Login with Google</p>
        <div className="text-center social-btn">
            <NavLink to="/"><button onClick={handleGoogleLogin} className="btn btn-danger"><i className="fa fa-google"></i>&nbsp; Google</button></NavLink>
			
        </div>
    </form>
    <p className="text-center text-muted small">Don't have an account? <NavLink to="/signup">Sign up here!</NavLink></p>
</div>
    </div>
  </div>
    );
};

export default Login;