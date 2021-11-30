import React, { useState, useEffect, useRef } from "react";
import "./SignUpStyles.css";
import CustomGender from "./CustomGender";
import { GoX } from "react-icons/go";
import { FaExclamationCircle } from "react-icons/fa";
import { FaQuestionCircle } from "react-icons/fa";

import axios from "axios";

function Signup(props) {
  const date = new Date();
  const getDay = date.getDate();
  const monthInLetters = date.getMonth();
  let getMonth = "";
  const getYear = date.getFullYear();

  switch (monthInLetters) {
    case 0:
      getMonth = "Jan";
      break;
    case 1:
      getMonth = "Feb";
      break;
    case 2:
      getMonth = "Mar";
      break;
    case 3:
      getMonth = "Apr";
      break;
    case 4:
      getMonth = "May";
      break;
    case 5:
      getMonth = "Jun";
      break;
    case 6:
      getMonth = "Jul";
      break;
    case 7:
      getMonth = "Aug";
      break;
    case 8:
      getMonth = "Sep";
      break;
    case 9:
      getMonth = "Oct";
      break;
    case 10:
      getMonth = "Nov";
      break;
    case 11:
      getMonth = "Dec";
      break;
    default:
      getMonth = "none";
  }

  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [emailOrPhone, setemailOrPhone] = useState("");
  const [password, setpassword] = useState("");
  const [gender, setgender] = useState("");
  const [dayOfBirth, setdayOfBirth] = useState(getDay);
  const [monthOfBirth, setmonthOfBirth] = useState(getMonth);
  const [yearOfBirth, setyearOfBirth] = useState(getYear);
  const [input1Clicked, setinput1Clicked] = useState(false);
  const [input2Clicked, setinput2Clicked] = useState(false);
  const [input3Clicked, setinput3Clicked] = useState(false);
  const [input4Clicked, setinput4Clicked] = useState(false);
  const [tip1Clicked, settip1Clicked] = useState(false);
  const [tip2Clicked, settip2Clicked] = useState(false);
  const [wrongDOB, setwrongDOB] = useState(false);
  const [genderNotSelected, setgenderNotSelected] = useState(false);

  const grapinput = useRef();
  useEffect(() => {
    window.addEventListener("mouseup", (e) => {
      if (e.target !== grapinput) {
        setinput1Clicked(false);
        setinput2Clicked(false);
        setinput3Clicked(false);
        setinput4Clicked(false);
        settip1Clicked(false);
        settip2Clicked(false);
        setgenderNotSelected(false);
        setwrongDOB(false);
      }
    });
  });
  function closeHandler() {
    props.CNAstate(false);
  }
  function formDate(e) {
    if (e.target.name === "firstName") {
      setfirstName(e.target.value);
      setinput1Clicked(false);
    } else if (e.target.name === "lastName") {
      setlastName(e.target.value);
      setinput2Clicked(false);
    } else if (e.target.name === "emailOrPhone") {
      setemailOrPhone(e.target.value);
      setinput3Clicked(false);
    } else if (e.target.name === "password") {
      setpassword(e.target.value);
      setinput4Clicked(false);
    }
  }

  function genderHandler(e) {
    setgender(e.target.value);
  }

  function days() {
    const day = [];

    for (let i = 1; i <= 31; i++) {
      day.push(<option>{i}</option>);
    }
    return day;
  }

  function months() {
    const month = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const createMonth = [];
    for (let i = 0; i <= month.length; i++) {
      createMonth.push(<option>{month[i]}</option>);
    }
    return createMonth;
  }

  function years() {
    const year = [];
    for (let i = 2021; i >= 1900; i--) {
      year.push(<option> {i} </option>);
    }
    return year;
  }
  function tipHandler(e) {
    if (e.target.name === "firstName") {
      setinput1Clicked(true);
    } else if (e.target.name === "lastName") {
      setinput2Clicked(true);
    } else if (e.target.name === "emailOrPhone") {
      setinput3Clicked(true);
    } else if (e.target.name === "password") {
      setinput4Clicked(true);
    }
  }
  function tipHandler2() {
    settip1Clicked(true);
  }
  function tipHandler3() {
    settip2Clicked(true);
  }
  function DOB(e) {
    if (e.target.name === "D") {
      setdayOfBirth(e.target.value);
    } else if (e.target.name === "M") {
      setmonthOfBirth(e.target.value);
    } else if (e.target.name === "Y") {
      setyearOfBirth(e.target.value);
    }
  }

  function submitHandler(e) {
    e.preventDefault();
    if (firstName.trim() === "") {
      setinput1Clicked(true);
    } else if (lastName.trim() === "") {
      setinput2Clicked(true);
    } else if (emailOrPhone.trim() === "" || !/[\d]{5,}/.test(emailOrPhone)) {
      if (!/[(\S][+@][(\S]{1,}[+.][\S]/i.test(emailOrPhone)) {
        setinput3Clicked(true);
      } else if (
        password === "" ||
        password.length < 6 ||
        !/[0-9]/.test(password) ||
        !/[a-z]/i.test(password) ||
        !/[^a-z0-9]/i.test(password)
      ) {
        setinput4Clicked(true);
      } else if (yearOfBirth >= getYear - 4) {
        setwrongDOB(true);
      } else if (gender === "") {
        setgenderNotSelected(true);
      } else {
        props.CNAstate(false);
        alert("your account have been successfully created");
      }
      const dataObj = {
        firstName,
        lastName,
        emailOrPhone,
        password,
        gender,
        dayOfBirth,
        monthOfBirth,
        yearOfBirth,
      };

      axios
        .post("http://localhost:5000/CreateAccount", dataObj)
        .then((res) => console.log(res.data));
    }
  }
  return (
    <form className={"SUcontainer"}>
      <h1 className="SUh1">Sign Up</h1>
      <i className="HPicon" onClick={closeHandler}>
        <GoX />
      </i>
      <div className="SUtxt1">It's quick and easy.</div>
      <p className="SUtext2"> </p>
      <div className="flexC">
        <div className="SUlabel1 ">
          <i
            className="SUicon2"
            name="firstName"
            style={input1Clicked ? { display: "block" } : { display: "none" }}
          >
            <FaExclamationCircle />
          </i>
          <input
            ref={grapinput}
            style={input1Clicked ? { border: "1px groove #af3e3e" } : null}
            type="text"
            name="firstName"
            value={firstName}
            placeholder="First name"
            className="SUinput1"
            onClick={tipHandler}
            onChange={formDate}
            required
          />
        </div>

        <div
          style={input1Clicked ? { display: "block" } : { display: "none" }}
          className="SUtipt1"
        >
          what's your name?
        </div>
        <div
          style={input1Clicked ? { display: "block" } : { display: "none" }}
          className="SUtipt11"
        ></div>

        <div className="SUlabel1 ">
          <i
            className="SUicon2"
            name="lastName"
            style={input2Clicked ? { display: "block" } : { display: "none" }}
          >
            <FaExclamationCircle />
          </i>
          <input
            style={input2Clicked ? { border: "1px groove #af3e3e" } : null}
            ref={grapinput}
            type="text"
            name="lastName"
            value={lastName}
            placeholder="Last name"
            className="SUinput1"
            onClick={tipHandler}
            onChange={formDate}
            required
          />
        </div>

        <div
          style={input2Clicked ? { display: "block" } : { display: "none" }}
          className="SUtipt2"
        >
          what's your name?
        </div>
        <div
          style={input2Clicked ? { display: "block" } : { display: "none" }}
          className="SUtipt22"
        ></div>

        <div className="SUlabel2 ">
          <i
            className="SUicon2"
            name="emailOrPhone"
            style={input3Clicked ? { display: "block" } : { display: "none" }}
          >
            <FaExclamationCircle />
          </i>
          <input
            ref={grapinput}
            style={input3Clicked ? { border: "1px groove #af3e3e" } : null}
            type="text"
            value={emailOrPhone}
            name="emailOrPhone"
            placeholder="Mobile number or email"
            className="SUinput2"
            onClick={tipHandler}
            onChange={formDate}
            required
          />
        </div>

        <div
          style={input3Clicked ? { display: "block" } : { display: "none" }}
          className="SUtipt3"
        >
          You'll use this when you log in and if you ever need to reset your
          password.
        </div>
        <div
          style={input3Clicked ? { display: "block" } : { display: "none" }}
          className="SUtipt33"
        ></div>

        <div className="SUlabel2 ">
          <i
            className="SUicon2"
            name="password"
            style={input4Clicked ? { display: "block" } : { display: "none" }}
          >
            <FaExclamationCircle />
          </i>
          <input
            ref={grapinput}
            style={input4Clicked ? { border: "1px groove #af3e3e" } : null}
            type="password"
            value={password}
            name="password"
            placeholder="New password"
            className="SUinput2"
            onClick={tipHandler}
            onChange={formDate}
            required
          />
        </div>
        <div
          style={input4Clicked ? { display: "block" } : { display: "none" }}
          className="SUtipt4"
        >
          Enter a combination of at least six numbers, letters and punctuation
          marks (such as ! and &).
        </div>
        <div
          style={input4Clicked ? { display: "block" } : { display: "none" }}
          className="SUtipt44"
        ></div>
      </div>
      <p className="SUtext3">Date of birth</p>
      <i className="SUicon3" ref={grapinput} onClick={tipHandler2}>
        <FaQuestionCircle />
      </i>
      <div
        className="SUtipt5"
        style={tip1Clicked ? { display: "block" } : { display: "none" }}
      >
        <b>Providing your date of birth</b> helps make sure that you get the
        right Facebook experience for your age. If you want to change who sees
        this, go to the About section of your Profile. For more details, please
        visit our
        <a href="/" className="SUlinks">
          Data Policy
        </a>
        .
      </div>
      <div className="flexC2">
        <select
          style={wrongDOB ? { border: "1px groove #af3e3e" } : null}
          className="SUselect1"
          name="D"
          value={dayOfBirth}
          onChange={DOB}
        >
          {days()}
        </select>
        <select
          style={wrongDOB ? { border: "1px groove #af3e3e" } : null}
          className="SUselect1"
          name="M"
          value={monthOfBirth}
          onChange={DOB}
        >
          {months()}
        </select>
        <select
          style={wrongDOB ? { border: "1px groove #af3e3e" } : null}
          className="SUselect1"
          name="Y"
          value={yearOfBirth}
          onChange={DOB}
        >
          {years()}
        </select>
        <div
          style={wrongDOB ? { display: "block" } : { display: "none" }}
          className="SUtipt8"
        >
          It looks like you've entered the wrong info. Please make sure that you
          use your real date of birth.
        </div>
        <div
          style={wrongDOB ? { display: "block" } : { display: "none" }}
          className="SUtipt88"
        ></div>
      </div>
      <p className="SUtext3">Gender</p>
      <i className="SUicon3" ref={grapinput} onClick={tipHandler3}>
        <FaQuestionCircle />
      </i>
      <div
        className="SUtipt6"
        style={tip2Clicked ? { display: "block" } : { display: "none" }}
      >
        You can change who sees your gender on your profile later. Select Custom
        to choose another gender, or if you'd rather not say.
      </div>
      <div className="flexC2">
        <label
          className="SUradio1"
          style={genderNotSelected ? { border: "1px groove #af3e3e" } : null}
        >
          Female
          <input
            type="radio"
            name="gender"
            className="SUradio2"
            value="female"
            onClick={genderHandler}
            required
          />
        </label>
        <label
          className="SUradio1"
          style={genderNotSelected ? { border: "1px groove #af3e3e" } : null}
        >
          Male
          <input
            type="radio"
            name="gender"
            className="SUradio2"
            value="male"
            onClick={genderHandler}
            required
          />
        </label>
        <label
          className="SUradio1"
          style={genderNotSelected ? { border: "1px groove #af3e3e" } : null}
        >
          Custom
          <input
            type="radio"
            name="gender"
            className="SUradio2"
            value="custom"
            onClick={genderHandler}
            required
          />
        </label>
      </div>
      <div
        style={genderNotSelected ? { display: "block" } : { display: "none" }}
        className="SUtipt7"
      >
        Please choose a gender. You can change who can see this later.
      </div>
      <div
        style={genderNotSelected ? { display: "block" } : { display: "none" }}
        className="SUtipt77"
      ></div>
      {gender === "custom" ? <CustomGender /> : null}
      <p className="SUtext4">
        By clicking Sign Up, you agree to our
        <a href="/" className="SUlinks">
          Terms
        </a>
        ,
        <a href="/" className="SUlinks">
          Data Policy
        </a>
        and
        <a href="/" className="SUlinks">
          Cookie Policy
        </a>
        . You may receive SMS notifications from us and can opt out at any time.
      </p>
      <button className="SUbtn1" type="submit" onClick={submitHandler}>
        Sing Up
      </button>
    </form>
  );
}
export default Signup;
