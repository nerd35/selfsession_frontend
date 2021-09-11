import React from "react";
import { Link } from "react-router-dom";
import { IBlog } from "../../utils/TypeScript";
import "../../styles/blog.css";

interface IProps {
  blog: IBlog;
}

const CardVert: React.FC<IProps> = ({ blog }) => {
  return (
    <div className="container-fluid" >
      <div className="pt-5 row">
        <div className=" col-md-12">
          <div className=" post-card">
            <div className="Post-card-image">
              {typeof blog.thumbnail === "string" && (
                <img src={blog.thumbnail} alt="postImage" />
              )}
            </div>
            <div className="post-card-content">
              {/* <Link to="" className="categorie">
                Food
              </Link> */}
              <br />
              <Link
                className="post-card-title text-secondary"
                style={{ textDecoration: "none" }}
                to={`/blog/${blog._id}`}
              >
                {blog.title.slice(0, 30) + "..."}
              </Link>
              <p className="post-card-text">{blog.description}</p>
              <div className="post-card-info">
                <div>
                  {
                    typeof(blog.user) !== 'string' && 
                  <img src={blog.user.avatar} alt="author" className="post-card-author" />
                  }
                </div>
                <div>
                  <p className="pl-2 post-card-author-title">
                    {
                      typeof (blog.user) !== 'string' &&
                      <Link style={{textDecoration: 'none', cursor: 'pointer'}} className="text-secondary post-card-author-title" to={`/profile/${blog.user._id}`}>
                          {blog.user.name}
                      </Link>
                    }
                  </p>
                </div>
                <div>
                  <p className="post-card-date">{new Date(blog.createdAt).toLocaleString()}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardVert;
