import React from "react";

import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { IParams, RootStore } from "../../utils/TypeScript";
import { OtherInfo, UserBlog, UserInfo } from "../../components";

const Profile = () => {
  const { auth } = useSelector((state: RootStore) => state);

  const { slug }: IParams = useParams();
  console.log({ userID: slug });
  return (
    <div className="my-3 row h-100">
      <div className="mb-3 col-md-5 h-100">
        {auth.user?._id === slug ? <UserInfo /> : <OtherInfo id={slug} />}
      </div>
      <div className="col-md-7">
          <UserBlog />
      </div>
    </div>
  );
};

export default Profile;
