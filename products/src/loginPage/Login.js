import React, { useState } from 'react';

import { GoogleLogin } from 'react-google-login';
import MainComponent from '../components/MainComponent';
// refresh token
import { refreshTokenSetup } from '../utils/refreshToken';

const clientId =
  '895282282230-ej8gtnvk7ud32ks61lek3630fdbs7or7.apps.googleusercontent.com';

function Login() {
  const [isLogged, setIsLogged] = useState(false);
  const onSuccess = (res) => {
    setIsLogged(true);
    console.log('Login Success: currentUser:', res.profileObj);
    alert(
      `Logged in successfully welcome ${res.profileObj.name} 😍. \n See console for full profile object.`
    );
    refreshTokenSetup(res);
  };

  const onFailure = (res) => {
    console.log('Login failed: res:', res);
    alert(
      `Failed to login. 😢 Please ping this to repo owner twitter.com/sivanesh_fiz`
    );
  };

  return (
    <div>
      {isLogged && <MainComponent /> } 
      {isLogged || <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        style={{ marginTop: '100px' }}
        isSignedIn={true}
      />}
    </div>
  );
}

export default Login;