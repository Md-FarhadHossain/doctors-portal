import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from '../../assets/images/logo.png'
import { UserContext } from "../../context/AuthContext";

const Navbar = () => {
  const {user} = useContext(UserContext)
  console.log(user)
  // Navbar menu items/links
  const menuItem = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/">About</Link>
      </li>
      <li>
        <Link to="/appointment">Appointment</Link>
      </li>
      <li>
        <Link to="/">Reviews</Link>
      </li>
      <li>
        <Link to="/">Contact Us</Link>
      </li>
    </>
  );
  return (
    <>
      <div className="">
        <div className="navbar container mx-auto">
          <div className="navbar-start">
            <div className="dropdown">
              {/* Toggle responsive hamburger menu */}
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              {/* Toggle responsive hamburger menu end */}

              {/* Responsive Navbar */}
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                {menuItem}
              </ul>
            </div>
            {/* Responsive Navbar end */}

            {/* Logo */}
            <Link className="normal-case font-bold text-2xl flex items-center"><img className="w-9" src={logo} alt="" /><span>Doctors Portal</span></Link>
          </div>
          {/* Desktop navbar menu */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal p-0">{menuItem}</ul>
          </div>
          <div className="navbar-end">
            {
              user ? <><Link className="btn btn-error">Sign Out</Link></> : <><Link to='/login' className="btn btn-success">Login</Link></>
            }
            
          </div>
          {/* Desktop navbar menu */}
        </div>
      </div>
    </>
  );
};

export default Navbar;
