import React from "react";
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="container px-5 mt-5 ">
        <div className="mt-3 mb-5 notfound-widget">
          <div className=" notfound-content">
              <h1>404</h1>
              <h3>Page Not Found</h3>
              <p>It looks like nothing was found at this location.</p>
              <Link to="/" className="btn-notFound">Go Back To Home</Link>
          </div>
        </div>
    </div>
  );
};

export default NotFound;

