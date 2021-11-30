import React, { useState } from "react";
import "./HpStyles.css";

import Signup from "./Signup";
import { Link } from "react-router-dom";
import axios from "axios";

function HomePage() {
  const [emailOrPhone, setemailOrPhone] = useState("");
  const [password, setpassword] = useState("");
  const [logCheck, setlogCheck] = useState(false);
  const [newAccBtn, setnewAccBtn] = useState(false);
  const [loginfailmsg, setloginfailmsg] = useState("");
  function changeHandler(event) {
    setemailOrPhone(event.target.value);
  }

  function changeHandler2(event) {
    setpassword(event.target.value);
  }

  function loginHandler() {
    axios.get("http://localhost:5000/login").then((res) => {
      for (let i = 0; i < res.data.length; i++) {
        if (
          emailOrPhone.trim() === "" ||
          res.data[i].emailOrPhone !== emailOrPhone
        ) {
          setloginfailmsg(
            "The email or phone number that you've entered is incorrect."
          );
        } else if (
          password.trim() === "" ||
          res.data[i].password !== password
        ) {
          setloginfailmsg("The password that you've entered is incorrect.");
        } else if (
          res.data[i].emailOrPhone === emailOrPhone &&
          res.data[i].password === password
        ) {
          setlogCheck(true);
          setloginfailmsg("");
          break;
        }
      }
    });
  }
  function logoutHandler() {
    setpassword("");
    setemailOrPhone("");
    setlogCheck(false);
  }
  function newAccHandler() {
    setnewAccBtn(true);
  }

  return (
    <div>
      <div className={newAccBtn ? "HPcontainer0" : "HPcontainer"}>
        <div className="HPBox1">
          <h1 className="HPh1">facebook</h1>
          <p className="HPp">
            Facebook helps you connect and share with the people in your life.
          </p>
        </div>
        <div className="HPBox2">
          <input
            className="HPinput"
            onChange={changeHandler}
            type="text"
            value={emailOrPhone}
            placeholder="Email address or phone number"
          />

          <input
            className="HPinput"
            onChange={changeHandler2}
            value={password}
            type="password"
            placeholder="Password"
          />
          <div></div>
          <button
            onClick={logCheck ? logoutHandler : loginHandler}
            className={logCheck ? "HPbtn0" : "HPbtn1"}
          >
            {logCheck ? "Log Out" : "Log In"}
          </button>
          <span className="HPloginFailed">{loginfailmsg}</span>
          <Link to="/ForgotPass" className="HPlink">
            Forgotten password?
          </Link>

          <hr style={{ width: "90%", opacity: 0.3 }} />

          <button className="HPbtn2" onClick={newAccHandler}>
            Create New Account
          </button>
        </div>
      </div>
      {newAccBtn ? (
        <Signup CNAstate={(newAccBtn) => setnewAccBtn(newAccBtn)} />
      ) : null}
    </div>
  );
}
export default HomePage;
