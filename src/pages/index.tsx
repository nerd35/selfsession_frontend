import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { CardVert, Loadings } from "../components";

import { RootStore } from "../utils/TypeScript";

const Home = () => {
  const { homeBlogs } = useSelector((state: RootStore) => state);
  
  if (homeBlogs.length === 0) return <Loadings />;
  
  return (
    <div className="">
      <div className="">
        
      {homeBlogs.map((homeBlog) => (
        <div key={homeBlog._id}>
          {homeBlog.count > 0 && (
            <>
              <div className="sidebar-widget1 col-md-12">
                <div className="categories-widget">
                  <div className="py-3 categories-div">
                    <Link
                      to={`/blogs/${homeBlog.name.toLowerCase()}`}
                      style={{ textDecoration: "none" }}
                    >
                      <span className="category-widget-link">
                        <span className="me-2">{homeBlog.name}</span>
                        <span className=" category-widget-test">
                          {homeBlog.count}
                        </span>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>

              <div className=" row">

                {homeBlog.blogs.map((blog) => (
                <div className="col-md-4 ">
                  <CardVert key={blog._id} blog={blog} />
                </div>
                ))}
              </div>
            </>
          )}
          {
            homeBlog.count > 3 &&
            <div className="mb-3 text-center">

            <Link to={`/blog/${homeBlog.name}`} className="mx-auto text-center btn-custom1">
            Read more  &gt;&gt;
              </Link>
            </div>
          }
        </div>
      ))}
      </div>
    </div>
  );
};

export default Home;
