import React, { useState } from "react";
import "./HpStyles.css";
import Data from "./Data";
import Signup from "./Signup";
import { Link } from "react-router-dom";

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
    if (emailOrPhone === "") {
      setloginfailmsg("We cannot find any account attached to this email");
    }
    Data.forEach((item) => {
      if (
        item.password === password &&
        (item.emailOrPhone === emailOrPhone ||
          item.emailOrPhone === emailOrPhone)
      ) {
        setlogCheck(true);
        setloginfailmsg("");
      } else if (item.emailOrPhone !== emailOrPhone || emailOrPhone === "") {
        setloginfailmsg(
          "The email or phone number that you've entered is incorrect."
        );
      } else if (item.password !== password || password === "") {
        setloginfailmsg("The password that you've entered is incorrect.");
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
