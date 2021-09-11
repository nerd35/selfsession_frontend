import React from "react";
import { useDispatch } from "react-redux";
import { GoogleLogin, GoogleLoginResponse } from "react-google-login-lite";


import { FacebookLogin, FacebookLoginAuthResponse } from 'react-facebook-login-lite';

import { facebookLogin, googleLogin } from "../../redux/actions/authAction";

const SocialLogin = () => {
  const dispatch = useDispatch();
  const onSuccess = (googleUser: GoogleLoginResponse) => {
    const id_token = googleUser.getAuthResponse().id_token;
    dispatch(googleLogin(id_token));
  };

  const onFBSuccess = (response: FacebookLoginAuthResponse) => {
    const { accessToken, userID } = response.authResponse
    console.log({ accessToken, userID });
    dispatch(facebookLogin(accessToken, userID))
}

  return (
    <>
    <div className="my-2">
      <GoogleLogin
        client_id="812578864886-fmo548n405u8mop5v4a304ncacagtd8n.apps.googleusercontent.com"
        cookiepolicy="single_host_origin"
        onSuccess={onSuccess}
      />
    </div>
    <div className="my-2">
      <FacebookLogin 
      appId="1678786229177544"
      onSuccess={onFBSuccess}
    />
    </div>
    </>
  );
};

export default SocialLogin;
