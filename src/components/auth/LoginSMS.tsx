import React, { useState } from "react";
import { useDispatch } from 'react-redux'
import { loginSMS } from "../../redux/actions/authAction";

import { FormSubmit } from '../../utils/TypeScript'

const LoginSMS = () => {
  const [phone, setPhone] = useState("");
  const dispatch = useDispatch()

  const handleSubmit = (e: FormSubmit) => {
    e.preventDefault()
    dispatch(loginSMS(phone))
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3 form-group">
        <label htmlFor="phone" className="form-label">
          Phone Number
        </label>
        <input
          autoComplete="false"
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="form-control"
          id="phone"
          placeholder="+1234567890"
        />
      </div>

      <button disabled={phone ? false : true} type="submit" className="mb-3 btn btn-custom w-100">Login</button>
    </form>
  );
};

export default LoginSMS;
