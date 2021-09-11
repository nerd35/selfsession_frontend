import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useSelector } from 'react-redux'
import { RootStore } from '../../utils/TypeScript'

import { LoginPass, LoginSMS, SocialLogin } from "../../components";

const Login = () => {
  const [sms, setSms] = useState(false);

  const history = useHistory()

  const { auth } = useSelector((state: RootStore) => state)

  
  useEffect(() => {
    if(auth.access_token) history.push('/')
  },[auth.access_token, history])
  return (
    <div className="container auth_page">
      <div className="auth_box">
        <h3 className="mb-4 text-center text-uppercase">Login</h3>
        <SocialLogin/>
        {sms ? <LoginSMS /> : <LoginPass />}

        <small className="my-2 row text-primary" style={{ cursor: "pointer" }}>
          <span className="col-6">
            <Link to="/forget_password">Forgot password?</Link>
          </span>
          <span className="text-end col-6" onClick={() => setSms(!sms)}>
            {sms ? "Sign in with password" : "Sign in with SMS"}
          </span>
        </small>
        <p>
          {`You don't have an account?`}
          <Link
            to={`/register`}
            style={{
              color: "crimson",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
             Register Now
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
