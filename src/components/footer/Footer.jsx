import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../features/auth/authSlice";

const Footer = () => {
    const { token, isLoading } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const onLogout = () => {
      dispatch(logout());
    };

  return (
    <footer className='py-5 bg-dark'>
      <div className="container">
        <div className="row flex-wrap align-items-cente">
            <div className="col-12 col-md-6 p-3 d-flex flex-column">
                <Link to="#" className="nav-link fs-1 text-primary fw-bolder text-capitalize">
                    logo
                </Link>
                <p className="fs-6 text-muted col-12 col-sm-10">
                We specializes in the detection of apple scab disease using deep learning technology. By leveraging advanced computer vision algorithms and machine learning model called CNN, we are able to accurately identify and classify diseased apple trees with high precision and recall rates.
                </p>
            </div>
            <div className="col-12 col-sm-6 p-3 col-md-3">
                <nav className='w-100'>
                    <span className='fs-5 fw-bold text-primary'>Quik Links</span>
                    <ul className='navbar-nav w-100 text-white'>
                        <li className="nav-item">
                            <Link to="" className='nav-link'>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="" className='nav-link'>Disease Detection</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="" className='nav-link'>About Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="" className='nav-link'>Blog</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="col-12 col-sm-6 p-3 col-md-3 text-white d-flex flex-column">
                <nav>
                <span className='fs-5 fw-bold text-primary'>Account</span>
                <ul className="navbar-nav w-100 text-white">
                    <li className="nav-item mb-3"><Link to="/my-account" className='nav-link text-capitalize'>my profile</Link></li>
                    {/* <li className="nav-item"> */}
                    {token ? 
                        <button
                        disabled={isLoading}
                        onClick={onLogout}
                        className="w-fit-content bg-danger text-white"
                        >
                        Logout
                        </button> :

                        <Link
                        to="/auth/signup "
                        className="btn text-white btn-primary fs-5"
                        >
                            Join
                        </Link> 
                    }
                    {/* </li> */}
                </ul>
                </nav>
            </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
