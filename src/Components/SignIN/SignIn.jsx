import React from "react";
import "./sign.css";
import Navbar from "../Navbar/Navbar";

const SignIn = () => {
  return (
    <>
      <div>
        <div>
          <Navbar />
        </div>

        <div className="mainlog">
          <div className="loginpage">
            <h2>Sign in to your account</h2>
            <input type="text" placeholder="Email/Phone number" />
            <br />
            <input type="password" placeholder="Password" />
            <br />
            <button>Login</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
