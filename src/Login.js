import { Button } from '@material-ui/core';
import React from 'react';
import { useDispatch } from 'react-redux';
import { login } from './features/userSlice';
import { auth, provider } from './firebase';
import "./Login.css";

function Login() {
  const dispatch = useDispatch();
  
  const signIn = () => {
    auth.signInWithPopup(provider)
    .then(({ user }) => {
      dispatch(
        login({
          displayName: user.displayName,
          email: user.email,
          photoUrl: user.photoURL
        })
      );
    })
    .catch((error) => alert(error.message))
  };

  return (
    <div className="login">
      <div className="login__container">
        <img 
          src="data:image/png;base64,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" 
          alt="" 
        />
        <Button variant="contained" color="primary" onClick={signIn}>Login</Button>
      </div>      
    </div>
  );
}

export default Login;
