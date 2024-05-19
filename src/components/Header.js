import React, { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Login");

  const { loggedInUser } = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between items-center bg-amber-300">
      <div className="logo">
        <img className="w-24 m-4" src={LOGO_URL} alt="logo" />
      </div>
      <div className="nav-items font-medium">
        <ul className="flex m-4 p-4">
          <li>
            <Link to="/" className="px-4 py-1 rounded-lg hover:bg-black hover:text-white">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="px-4 py-1 rounded-lg hover:bg-black hover:text-white">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/contact" className="px-4 py-1 rounded-lg hover:bg-black hover:text-white">
              Contact
            </Link>
          </li>
          <li>
            <Link to="/grocery" className="px-4 py-1 rounded-lg hover:bg-black hover:text-white">
              Grocery
            </Link>
          </li>
          <li>
            <Link to="/cart" className="px-4  rounded-lg hover:bg-black hover:text-white">
              <i className="bi bi-cart text-xl font-extrabold"> </i> ({cartItems.length})
            </Link>
          </li>
          <li>
            <Link to="/user" className="px-4 py-1 font-bold rounded-lg hover:bg-black hover:text-white">
              {loggedInUser}
            </Link>
          </li>
          <button
            className="login-btn px-4 py-1 rounded-lg bg-black text-white hover:bg-amber-300 hover:text-black"
            onClick={() => {
              loginBtn === "Login"
                ? setLoginBtn("Logout")
                : setLoginBtn("Login");
            }}
          >
            {loginBtn}
          </button>
          
        </ul>
      </div>
    </div>
  );
};

export default Header;
