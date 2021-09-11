import React from "react";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";
import { RootStore } from "../../utils/TypeScript";

const RecentPost = () => {
  const { homeBlogs } = useSelector((state: RootStore) => state);

  return (
    <div className="sidebar-widget">
      <div className="latest-post">
        <h5>Latest Posts</h5>
      </div>
      {homeBlogs.map((blog) => (
        <div key={blog._id} className="latest-post-widget">
          {blog.count > 0 && (
            <>
            
            {blog.blogs.map((recent) => (
              <div key={recent._id} className="last-post">
                <div className="last-post-image">
                  <span>
                    {typeof recent.thumbnail === "string" && (
                      <img
                        src={recent.thumbnail}
                        alt="lastpostimage"
                        className="last-post-img"
                      />
                    )}
                  </span>
                </div>
                <div className="last-post-content">
                  <p>
                    <Link
                      style={{ textDecoration: "none", color: '#152035' }}
                      to={`/blog/${blog._id}`}
                    >
                      {recent.title}
                    </Link>
                  </p>
                  <small>{new Date(recent.createdAt).toLocaleString()}</small>
                </div>
              </div>
            ))}
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default RecentPost;
