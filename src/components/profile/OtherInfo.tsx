import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOtherInfo } from "../../redux/actions/profileAction";
import { RootStore, IUser } from "../../utils/TypeScript";
import Loadings from "../global/Loading";
interface IProps {
  id: string;
}

const OtherInfo: React.FC<IProps> = ({ id }) => {
  const [other, setOther] = useState<IUser>();
  const { otherInfo } = useSelector((state: RootStore) => state);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!id) return;

    if (otherInfo.every((user) => user._id !== id)) {
      dispatch(getOtherInfo(id));
    } else {
      const newUser = otherInfo.find((user) => user._id === id);
      if (newUser) setOther(newUser);
    }
  }, [id, otherInfo, dispatch]);

  if (!other) return <Loadings />;
  return (
    <div className="mx-auto sidebar-widget">
      <div className="author-widget ">
        <div className="author-image-container ">
          <img src={other.avatar} alt="authorimage" className="author-image" />
        </div>
        <h6 className="pt-3 author-title">
          <span>Hi, I'm {other.name}</span>
        </h6>
        <h6 className="pt-2" style={{ fontSize: "16px" }}>
          Role:{" "}
          <span className="text-uppercase text-danger"> {other.role}</span>
        </h6>
        <h6 className="" style={{ fontSize: "16px" }}>
          Contact: <span className=" text-info"> {other.account}</span>
        </h6>
        <p className="mb-2">
          Join Date:&nbsp;
          <span style={{ color: "#ffc107" }}>
             {new Date(other.createdAt).toLocaleString()}
          </span>
        </p>
      </div>
    </div>
  );
};

export default OtherInfo;
