import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../../redux/actions/authAction";
import { InputChange, FormSubmit } from "../../utils/TypeScript";

const RegisterForm = () => {
  const initialState = {
    name: "",
    account: "",
    password: "",
    cf_password: ""
  };
  const [userRegister, setUserRegister] = useState(initialState);
  const { name, account, password, cf_password } = userRegister;
  const [typePass, setTypePass] = useState(false);
  const [typeCfPass, setTypeCfPass] = useState(false);

  const dispatch = useDispatch();

  const handleInputChange = (e: InputChange) => {
    const { value, name } = e.target;
    setUserRegister({ ...userRegister, [name]: value });
  };

  const handleSubmit = (e: FormSubmit) => {
    e.preventDefault();
    dispatch(register(userRegister));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3 form-group">
        <label htmlFor="name" className="form-label">
         Name
        </label>
        <input
          autoComplete="false"
          type="text"
          className="form-control"
          id="name"
          name="name"
          value={name}
          onChange={handleInputChange}
          placeholder="Enter your Name...."
        />
      </div>
      <div className="mb-3 form-group">
        <label htmlFor="account" className="form-label">
          Email / Phone number
        </label>
        <input
          autoComplete="false"
          type="email"
          className="form-control"
          id="account"
          name="account"
          value={account}
          onChange={handleInputChange}
          placeholder="example@email.com"
        />
      </div>
      <div className="mb-3 form-group">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <div className="pass">
          <input
            autoComplete="false"
            type={typePass ? "text" : "password"}
            className="form-control"
            id="password"
            name="password"
            value={password}
            onChange={handleInputChange}
          placeholder="Your password must be 6 char long..."

          />
          <small onClick={() => setTypePass(!typePass)}>
            {typePass ? "hide" : "show"}
          </small>
        </div>
      </div>

      
      <div className="mb-3 form-group">
        <label htmlFor="cf_password" className="form-label">
          Confirm Password
        </label>
        <div className="pass">
          <input
            autoComplete="false"
            type={typeCfPass ? "text" : "password"}
            className="form-control"
            id="cf_password"
            name="cf_password"
            value={cf_password}
            onChange={handleInputChange}
          placeholder="Password must match"

          />
          <small onClick={() => setTypeCfPass(!typeCfPass)}>
            {typeCfPass ? "hide" : "show"}
          </small>
        </div>
      </div>
      <button
        type="submit"
        className="my-2 btn btn-dark w-100">
        Register
      </button>
    </form>
  );
};

export default RegisterForm;
