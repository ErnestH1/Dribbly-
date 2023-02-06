import React from "react";
import "../../styles/navbar.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
let navIndicator = document.getElementById("homeIndicator");
let[indicatorLeft,setPositon] = useState('1.2em')
let[indicatorWidth,setWidth] = useState('4.8em')

  return (
    <div id="navBody">
      <nav id="navbar" className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="containerLinks">
          <h5 id="webName">Dribbly</h5>
          <span id="linksSpan">
            <a onClick={()=>{
              setPositon('1.2em')
              setWidth('4.8em')
            }} href="#landingPage-container"className="navbarLink">Services</a>
            <a onClick={()=>{
            setPositon('8.4em')
            setWidth('6.8em')
            }}
             href="#reviews" className="navbarLink">Testimonials</a>
            <a onClick={()=>{
            setPositon('17.3em')
            setWidth('3.5em')
            }}
            href="#about-container" className="navbarLink">About</a>
            <div style={{left : indicatorLeft ,width: indicatorWidth}} id="homeIndicator"></div>
          </span>
          <span id="buttonSpan">
            <NavLink to='/signup'>
              <button type="button" class="btn btn-success mx-2">
                Sign Up
              </button>
            </NavLink>
            <NavLink to='/loginform'>
              <button type="button" class="btn btn-info">
                Login
              </button>
            </NavLink>
          </span>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
