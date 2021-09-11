import React, { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootStore, IBlog } from "../../utils/TypeScript";
import { CardHoriz, CreateForm, NotFound } from "../../components";
import { Quill } from "../../components";
import { validCreateBlog } from "../../utils/Valid";
import { ALERT } from "../../redux/types/alertType";
import { createBlog } from "../../redux/actions/blogAction";

const CreateBlog = () => {
  const initialState = {
    user: "",
    title: "",
    content: "",
    description: "",
    thumbnail: "",
    category: "",
    createdAt: new Date().toISOString(),
  };

  const [blog, setBlog] = useState<IBlog>(initialState);
  const [body, setBody] = useState("");

  const divRef = useRef<HTMLDivElement>(null);
  const [text, setText] = useState("");

  const { auth } = useSelector((state: RootStore) => state);

  const dispatch = useDispatch();

  useEffect(() => {
    const div = divRef.current;
    if (!div) return;
    const text = div?.innerText as string;
    setText( text);
  }, [body])

  const handleSubmit = async () => {
    if (!auth.access_token) return;
   
    const check = validCreateBlog({ ...blog, content: text });
    if (check.errLength !== 0) {
      return dispatch({ type: ALERT, payload: { errors: check.errMsg } });
    }
    
    
    let data = { ...blog,  content: body }
    
    dispatch(createBlog(data, auth.access_token))
  };

  if (!auth.access_token) return <NotFound />;
  return (
    <div className="my-4 create_blog">
      <div className="mt-4 row">
        <div className="col-md-6">
          <h5>Create Post</h5>
          <CreateForm blog={blog} setBlog={setBlog} />
        </div>
        <div className="col-md-6">
          <h5>Preview</h5>
          <CardHoriz blog={blog} />
        </div>
        <div className=" col-md-12">
          <div className="quill-widget">
            <Quill setBody={setBody} />
            <div
              ref={divRef}
              dangerouslySetInnerHTML={{
                __html: body,
              }}
              style={{ display: "none" }}
            />
          </div>
          <small>{text.length}</small>
          <div className="text-center">
            <button
              onClick={handleSubmit}
              className="mx-3 mt-5 text-center w-25 btn-block btn-custom1"
            >
              Create Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateBlog;
