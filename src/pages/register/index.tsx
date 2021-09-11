import React from "react";
import { Link } from "react-router-dom";
import { RegisterForm } from "../../components";

const Register = () => {
  return (
    <div className="container auth_page">
      <div className="auth_box">
        <h3 className="mb-4 text-center text-uppercase">Register</h3>
        
          <RegisterForm/>
        
        <p>
          {`Already have an account?`}
          <Link
            to={`/login`}
            style={{
              color: "crimson",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
             Login Now
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
