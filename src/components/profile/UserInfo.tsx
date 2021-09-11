import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateUser, resetPassword } from "../../redux/actions/profileAction";

import { InputChange, RootStore, IUserInfo, FormSubmit } from "../../utils/TypeScript";

import NotFound from "../global/NotFound";

const UserInfo = () => {
  const intialState = {
    name: "",
    account: "",
    avatar: "",
    password: "",
    cf_password: "",
  };

  const { auth } = useSelector((state: RootStore) => state);
  const dispatch = useDispatch();

  const [user, setUser] = useState<IUserInfo>(intialState);
  const [typePass, setTypePass] = useState(false);
  const [typeCfPass, setTypeCfPass] = useState(false);

  const { name, avatar, password, cf_password } = user;


  const handleInputChange = (e: InputChange) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleAvatarChange = (e: InputChange) => {
    const target = e.target as HTMLInputElement
    const files = target.files

    if (files) {
      const file = files[0]
      setUser({...user, avatar: file})
    }
  }

  const handleSubmit = (e: FormSubmit) => {
    e.preventDefault();
    if (avatar || name)
      dispatch(updateUser((avatar as File), name, auth))
    if (password && auth.access_token)
      dispatch(resetPassword(password, cf_password, auth.access_token))
  }

  if (!auth.user) return <NotFound />;
  return (
    <form className="product_info" onSubmit={handleSubmit}>
      <div className="info_avatar">
        <img src={avatar ? URL.createObjectURL(avatar) : auth.user.avatar}
          alt="avatar"
        />
        <span>
          <i className="fas fa-camera" />
          <p>Change</p>
          <input type="file" onChange={handleAvatarChange} accept="image/*" name="file" id="file_up" />
        </span>
      </div>

      <div className="my-3 form-group">
        <label htmlFor="name">Name</label>
        <input
        autoComplete="false"
          type="text"
          className="form-control"
          id="name"
          name="name"
          defaultValue={auth.user.name}
          onChange={handleInputChange}
         
        />
      </div>
    

      <div className="form-group my=3 mb-3">
        <label htmlFor="account">Account</label>
        <input
        autoComplete="false"
          type="text"
          className="form-control"
          id="account"
          name="account"
          defaultValue={auth.user.account}
          onChange={handleInputChange}
          disabled={true}
        />
      </div>

      {
        auth.user.type !== 'register' && 
        <small className="text-danger">
         * Quick login account with {auth.user.type} cannot use this function *.
        </small>
      }
      
        <div className="my-3 form-group">
          <label htmlFor="password">Password</label>
          <div className="pass">
          <input
        autoComplete="false"
            type={typePass ? "text" : "password"}
            className="form-control"
            id="password"
            name="password"
            value={password}
            onChange={handleInputChange}
            disabled={auth.user.type !== 'register'}
          />
          <small onClick={() => setTypePass(!typePass)}>
            {
              typePass ? 'Hide' : 'Show'
            }
          </small>
          </div>
        </div>

        <div className="my-3 form-group">
          <label htmlFor="cf_password">Confirm Password</label>
          <div className="pass">
          <input
        autoComplete="false" 
            type={typeCfPass ? "text" : "password"}
            className="form-control"
            id="cf_password"
            name="cf_password"
            value={cf_password}
            onChange={handleInputChange}
            disabled={auth.user.type !== 'register'}
          />
          <small onClick={() => setTypeCfPass(!typeCfPass)}>
            {
              typeCfPass ? 'Hide' : 'Show'
            }
          </small>
          </div>
        </div>

      <button type="submit" className="btn btn-custom w-100">
        Update
      </button>
    </form>
  );
};

export default UserInfo;
