import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useApolloClient } from "@apollo/client";


const Nav = () => {
  const client = useApolloClient();
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Quote App
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/">
                Home
              </NavLink>
            </li>
              {
                token ? 
                  <>
                    <li className="nav-item">
                      <NavLink className="nav-link" aria-current="page" to="/profile">
                        Profile
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" aria-current="page" to="/create">
                        Create
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <button className="btn btn-danger" aria-current="page" onClick={()=>{localStorage.removeItem("token"); navigate('/login'); }}>
                        Logout
                      </button>
                    </li>
                  </>
                :
                <>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/signup">
                      Signup
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/login">
                      Login
                    </NavLink>
                  </li>
                </>
              }
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
