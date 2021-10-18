import React from 'react';
import useAuth from '../../../Hooks/useAuth';

const Login = () => {
    const {singInUsingGoogle} = useAuth();
    return (
        <div>
            <h2>Please login</h2>
            <button onClick={singInUsingGoogle} className="btn btn-warning">Google singin</button>
        </div>
    );
};

export default Login;