import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/actions/authAction";
import { InputChange, FormSubmit } from '../../utils/TypeScript'

const LoginPass = () => {
  const initialState = { account: "", password: "" };
  const [userLogin, setUserLogin] = useState(initialState);
  const { account, password } = userLogin;
  const [typePass, setTypePass] = useState(false)

  const dispatch = useDispatch()

  const handleInputChange = (e: InputChange) => {
    const { value, name } = e.target
    setUserLogin({...userLogin, [name]: value})
  }
  

  const handleSubmit = (e: FormSubmit) => {
    e.preventDefault()
    dispatch(login(userLogin))
  }


  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3 form-group">
        <label htmlFor="account" className="form-label">Email / Phone number</label>
        <input
          autoComplete="false"
          type="email"
          className="form-control"
          id="account"
          name="account"
          value={account}
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-3 form-group">
        <label htmlFor="password" className="form-label">Password</label>
        <div className="pass">
        <input
          autoComplete="false"
          type={typePass ? "text" : "password"}
          className="form-control"
          id="password"
          name="password"
          value={password}  
          onChange={handleInputChange}
          />
          <small onClick={() => setTypePass(!typePass)}>
            {typePass ? 'hide' : 'show'}
          </small>
        </div>
      </div>

      <button type="submit" className="mt-4 btn btn-custom w-100" disabled={(account && password) ? false : true}>Login</button>
    
    </form>
  );
};

export default LoginPass;
