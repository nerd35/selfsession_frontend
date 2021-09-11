import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootStore } from "../../utils/TypeScript";

const CategorySidebar = () => {
  const { homeBlogs } = useSelector((state: RootStore) => state);
  return (
    <div className="sidebar-widget">
      <div className="latest-post">
        <h5>Categories</h5>
      </div>
      {homeBlogs.map((homeBlog) => (
        <div className="categories-widget" key={homeBlog._id}>
          {homeBlog.count > 0 && (
            <Link
              to={`/blogs/${homeBlog.name.toLowerCase()}`}
              style={{ textDecoration: "none" }}
            >
              <div className="py-2 categories-div">
                <span className="category-widget-link">{homeBlog.name}</span>
                <span className="category-widget-test">{homeBlog.count}</span>
              </div>
            </Link>
          )}
        </div>
      ))}
    </div>
  );
};

export default CategorySidebar;
