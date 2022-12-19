import React from "react";
import { useGlobalContext } from "../../context";
import { Link } from "react-router-dom";
import "./navbar.css";
const Navbar = () => {
  const { userSearch, setUserSearch } = useGlobalContext();
  return (
    <>
      <div className="navbar">
        <Link to="/shafiq" className="Logo">
          LOGO
        </Link>
        <div className="search">
          <input
            type="text"
            placeholder="search"
            value={userSearch}
            onChange={(e) => setUserSearch(e.target.value)}
          />
        </div>
        <div className="navlist">
          <ul type="none">
            <li>
              <Link to="/" className="anchor">
                Home
              </Link>
            </li>
            <li>
              <Link to="/lanuage" className="anchor">
                Lanuage
              </Link>
            </li>
            <li>
              <Link to="/genre" className="anchor">
                Genre
              </Link>
            </li>
            <li>
              <Link to="/account" className="anchor">
                Account
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
