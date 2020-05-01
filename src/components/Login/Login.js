import React from 'react';
import Auth from './use-auth';

const Login = () => {
    const auth = Auth();
    console.log(auth)
    return (
        <div>
            <h1>Login</h1>
            <button>Login With Google</button>
        </div>
    );
};

export default Login;