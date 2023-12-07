import { signOut } from "firebase/auth";
import auth from "../../Firebase/Firebase.config";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { Link, useLocation, useNavigate } from "react-router-dom";
import { logout } from "../../features/auth/authSlice";

const Navbar = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const {
    user: { email, role },
  } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const handleSignOut = () => {
    signOut(auth).then(() => {
      dispatch(logout());
      navigate("/login");
    });
  };
  return (
    <nav
      className={`h-20 fixed w-full z-[999] ${
        pathname === "/" ? null : "bg-white"
      }`}
    >
      <ul className="max-w-7xl mx-auto flex gap-3 h-full items-center">
        <li className="flex-auto font-semibold text-2xl text-[#1967d2]">
          <Link to="/">JobSearch</Link>
        </li>
        <li>
          <Link className="hover:text-[#1967d2]" to="/jobs">
            Jobs
          </Link>
        </li>

        {email ? (
          <button
            onClick={handleSignOut}
            className="hover:text-primary transition-all"
          >
            Logout{" "}
          </button>
        ) : (
          <li>
            <Link
              className="border border-black px-2 py-1 rounded-full hover:border-primary hover:text-white hover:bg-primary hover:px-4 transition-all "
              to="/login"
            >
              Login
            </Link>
          </li>
        )}
        {email && role && (
          <li>
            <Link
              className="border border-black px-2 py-1 rounded-full hover:border-primary hover:text-white hover:bg-primary hover:px-4 transition-all "
              to="/dashboard"
            >
              Dashboard
            </Link>
          </li>
        )}
        {email && !role && (
          <li>
            <Link
              className="border border-black px-2 py-1 rounded-full hover:border-primary hover:text-white hover:bg-primary hover:px-4 transition-all "
              to="/register"
            >
              Register
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
