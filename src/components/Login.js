import React, { useState } from "react";
import { NavLink } from "react-router-dom"

export const Login = ({email,pass}) => {
    const [loginEmail, setEmail] = useState('');
    const [loginPass, setPass] = useState(null);
    const [path,setPath] = useState('/loginform');
    const [passType, setPassType] = useState('password')
    const [passVisibility, setPassVisibility] = useState('visibility');
    const[checkedState,setCheckedState] = useState('false');
    const[emailerrorState, setErrorMessage] = useState(true);
    const[passerrorState, setPassMessage] = useState(true);

    const emailErrorMessage = emailerrorState ? '*please enter your email address' : '*wrong email address'
    const passErrorMessage = passerrorState ? '*please enter your password' : '*wrong password'


    function handleEmailErrorMessage(){
        setErrorMessage(false)
    }

    function handlepassErrorMessage(){
        setPassMessage(false)
    }


    function validate(){
          if (document.getElementById("email").value !== "") {
            document.getElementById("email").style.border = "1px solid black";
            document.querySelector(".loginemailErr").style.visibility = "hidden";
          }
          if (document.getElementById("password").value !== "") {
            document.getElementById("password").style.border = "1px solid black";
            document.querySelector(".loginpassErr").style.visibility = "hidden";
          }
      }

    function finalVerification(){
        if(checkedState === 'false')
        {
          document.querySelector('#checkBoxRequired').style.visibility = 'visible';
        }
        if(pass !== loginPass || loginPass === ''){
            document.getElementById("password").style.border = "1px solid red";
            document.querySelector(".loginpassErr").style.visibility = "visible";
        }
        if(email !== loginEmail || loginEmail === ''){
            document.getElementById("email").style.border = "1px solid red";
            document.querySelector(".loginemailErr").style.visibility = "visible";
        }
    }

    function handleLoginPassword(){
        console.log('clickex');
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
    }

    function handleEmail(value){
    setEmail(value)
    }

    function handlePassword(value){
    setPass(value)
    }

    function confirmUser(){
        if(email !== loginEmail || pass !== loginPass){
            console.log('error');
        }
       if(email === loginEmail && pass === loginPass){
            setPath('/homepage')
        }
    }


    return (
        <div className="auth-form-container">
           <NavLink exact to = "/"><i className="material-icons" id="registerCancel">arrow_backward</i></NavLink> 
        <form className="register-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <br/>
            <label className="emailLabel" id="registerLabel" for="email">email 
            <h6 id="errorMsg" className ="loginemailErr" >{emailErrorMessage}</h6>
            </label>
            <input onChange={(e) => {
                handleEmail(e.target.value)
                confirmUser()
                validate()
                handleEmailErrorMessage()
            }}type="email" placeholder="youremail@gmail.com" id="email" name="email"  value={loginEmail} />
            <br/>
            <label className="passwordLabel" id="registerLabel" htmlFor="password">password 
            <h6 id="errorMsg" className ="loginpassErr" >{passErrorMessage}</h6>
             </label>
           <span id="passSpan">
            <input onChange={(e) => {
                 handlePassword(e.target.value)
                 confirmUser()
                 validate()
                 handlepassErrorMessage()
            }} type={passType} placeholder="********" id="password" name="password"   value={loginPass}  />
            <i onClick = {(e)=>{
                e.stopPropagation(); 
                handleLoginPassword()
            }} id="visibilityIcon" className="material-icons">{passVisibility}</i>
            </span>
            <br/>
            <br/>
            <h6 id="checkBoxRequired">*required</h6>
           <span id='checkboxspan'><input onClick = {()=>{
               setCheckedState('true')
            if(pass === loginPass && email === loginEmail){
                setPath('/homepage')
            }
            if (checkedState === 'true') {
                document.querySelector('#checkBoxRequired').style.visibility = 'hidden';
            }
            
           }} type="checkbox" /><h6>I've read and agreed to the terms and conditions</h6></span>
            <NavLink to={path}>
                <button onClick={()=>{
                      finalVerification()
                }} id="registerButtonSubmit" type="submit">Login</button>
            </NavLink>
            <br/>
            <span className="link-btn" ><h6>Don't have an account?</h6><NavLink to='/signup'>Register here</NavLink></span>
        </form>
       
    </div>
    )
}