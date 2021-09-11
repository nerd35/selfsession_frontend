import React from "react";
  import { Link} from "react-router-dom";
import Search from "../Search";
import Menu from "../Menu";
import Logo from '../../../assets/images/logo/logo1.jpg'

const Header = () => {
 
  return (
    <nav className="shadow-sm navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src={Logo} alt="logo" className="px-3 logo" style={{
             width: '150px',
             height: '40px',
             overflow: 'hidden',
             marginTop: '3px',
            objectFit: 'contain',
            borderRadius: '1px !important',
             boxShadow: 'none !important'
          }} />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <Search />
          <Menu />
        </div>
      </div>
    </nav>
  );
};

export default Header;
