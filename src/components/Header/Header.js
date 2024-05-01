import React from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const Header = ({ isAuthenticated, setIsAuthenticated }) => {
  // const navigate = useNavigate();
  const loginLogoutHandler = (e) => {
    if (isAuthenticated) {
      Cookies.remove("email");
      Cookies.remove("password");
      setIsAuthenticated(false);
    }
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Student Account Provisioning
          </a>

          <div className="navbar ">
            {/* <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"></ul> */}
            <button
              type="button"
              className="btn btn-success"
              onClick={loginLogoutHandler}
            >
              {isAuthenticated ? "Logout" : "Login"}
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
