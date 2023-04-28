import React from "react";
import { IoSearchSharp } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { IoPersonOutline } from "react-icons/io5";
import { logout } from "../../features/auth/authSlice";
const Header = () => {
  const { token, isLoading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(logout());
  };
  return (
    <header className="fixed-top backdrop-filter-white">
      <nav className="navbar navbar-expand-md py-md-1">
        <div className="container d-flex">
          <NavLink className="navbar-brand text-primary  mx-0" to="/">
            Logo
          </NavLink>
          <button
            className="navbar-toggler  "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item mx-3  fs-8 fw-semibold">
                <NavLink
                  className="nav-link active py-md-3"
                  aria-current="page"
                  to="/"
                >
                  HOME
                </NavLink>
              </li>
              <li className="nav-item mx-3  fs-8 fw-semibold">
                <NavLink className="nav-link py-md-3" to="#">
                  BLOGS
                </NavLink>
              </li>
              <li className="nav-item mx-3  fs-8 fw-semibold">
                <NavLink className="nav-link py-md-3" to="/disease-detection">
                  DIESASE DETECTION
                </NavLink>
              </li>
              <li className="nav-item mx-3  fs-8 fw-semibold">
                <NavLink className="nav-link py-md-3" to="/about">
                  ABOUT
                </NavLink>
              </li>
            </ul>
            <form className="d-flex align-items-center" role="search">
              <input
                className="form-control d-none me-2 bg-light rounded-pill"
                type="search"
                placeholder="بحث"
                aria-label="Search"
              />

              <IoSearchSharp className="fs-5 mx-3" />
              {token ? (
                <div className="dropdown">
                  <div
                    className=" dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <IoPersonOutline className="fs-5 mx-1" />
                  </div>
                  <ul className="dropdown-menu text-center px-2 slideIn animate dropdown-menu-end">
                    <li>
                      <NavLink
                        to="/my-account"
                        className="dropdown-item"
                        href="#"
                      >
                        Account
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/setting" className="dropdown-item" href="#">
                        Settings
                      </NavLink>
                    </li>
                    <li>
                      <button
                        disabled={isLoading}
                        onClick={onLogout}
                        className="dropdown-item bg-danger text-white"
                      >
                        Logout
                      </button>
                    </li>
                  </ul>
                </div>
              ) : (
                <NavLink
                  to="/auth/signup "
                  className="btn text-white btn-primary"
                >
                  Join
                </NavLink>
              )}
            </form>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
