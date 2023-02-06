import React, { useState } from "react";
import "../styles/RegisterLogin.css";
import { NavLink } from "react-router-dom";

export const Register = ({ transferData }) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState(null);
  const [name, setName] = useState("");
  const [path, setPath] = useState("/signup");
  const [passType, setPassType] = useState('password')
  const [passVisibility, setPassVisibility] = useState('visibility');


  function handlePassword(){
    if(passType === "password"){
    setPassType('text')
    setPassVisibility('visibility_off')}
    else if(passType === "text"){
      setPassType('password')
      setPassVisibility('visibility')
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(email);
  };

  function getName(value) {
    setName(value);
    // console.log(value);
  }

  function getEmail(value) {
    setEmail(value);
    // console.log(value);
  }

  function getPassword(value) {
    setPass(value);
  }

  function displayError() {
    if (document.getElementById("name").value === "") {
      document.getElementById("name").style.border = "1px solid red";
      document.querySelector(".nameErr").style.visibility = "visible";
    }
    if (document.getElementById("email").value === "") {
      document.getElementById("email").style.border = "1px solid red";
      document.querySelector(".emailErr").style.visibility = "visible";
    }
    if (document.getElementById("password").value === "") {
      document.getElementById("password").style.border = "1px solid red";
      document.querySelector(".passErr").style.visibility = "visible";
    }
  }

  function validate(){
    if (document.getElementById("name").value !== "") {
        document.getElementById("name").style.border = "1px solid black";
        document.querySelector(".nameErr").style.visibility = "hidden";
      }
      if (document.getElementById("email").value !== "") {
        document.getElementById("email").style.border = "1px solid black";
        document.querySelector(".emailErr").style.visibility = "hidden";
      }
      if (document.getElementById("password").value !== "") {
        document.getElementById("password").style.border = "1px solid black";
        document.querySelector(".passErr").style.visibility = "hidden";
      }
  }

  function verifyDetails() {
    if (email === "" || name === "" || pass == "") {
      console.log("blank");
    } else if (email !== "" || name !== "" || pass !== "") {
      setPath("/loginform");
    }
  }

  return (
    <div className="auth-form-container">
      <NavLink exact to="/">
        <i className="material-icons" id="registerCancel">
          arrow_backward
        </i>
      </NavLink>
      <form className="register-form" onSubmit={handleSubmit}>
        <h2>Register</h2>
        
        <label className="nameLabel" id="registerLabel" htmlFor="name">
          Full name{" "}
          <h6 className="nameErr" id="errorMsg">*please enter your name.</h6>
        </label>
        <input
          name="name"
          onChange={(e) => {
            getName(e.target.value);
            verifyDetails();
            validate()
          }}
          id="name"
          placeholder="full Name"
          value={name}
          required
        />

        <br />
        <label className="emailLabel" id="registerLabel" for="email">
          email
          <h6 className="emailErr" id="errorMsg">*please enter your email.</h6>
        </label>
        <input
          onChange={(e) => {
            getEmail(e.target.value);
            verifyDetails();
            validate()
          }}
          type="email"
          placeholder="youremail@gmail.com"
          id="email"
          name="email"
          value={email}
          required
        />

        <br />
        <label className="passwordLabel" id="registerLabel" htmlFor="password">
          password
          <h6 className="passErr" id="errorMsg">*please enter you password.</h6>
        </label>
        <span id="passSpan">
        <input
          value={pass}
          onChange={(e) => {
            getPassword(e.target.value);
            verifyDetails();
            validate()
          }}
          type={passType}
          placeholder="********"
          id="password"
          name="password"
          required
        />
        <i onClick={()=>{
          handlePassword()
        }} id="visibilityIcon" className="material-icons">{passVisibility}</i>
        </span>
        <br />
        <NavLink to={path}>
          <button
            onClick={() => {
              displayError();
              transferData(name, email, pass);
            }}
            id="registerButtonSubmit"
            type="submit"
          >
            Sign up
          </button>
        </NavLink>
        <br />
        <span className="link-btn">
          <h6>Already have an account?</h6>
          <NavLink to="/loginForm">Login here.</NavLink>
        </span>
      </form>
    </div>
  );
};
