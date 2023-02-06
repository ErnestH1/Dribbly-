import React from "react";
import "../../styles/navbar.css";
import { NavLink } from "react-router-dom";

function HomeNav() {
  return (
    <div id="navBody">
      <nav id="navbar" className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="containerLinks">
          <h5 id="webName">Dribbly</h5>
          <span id="linksSpan">
            <NavLink exact to='/'>
            <a className="navbarLink">Home</a>
            </NavLink>
            <a id="contactsLink" href="#section" className="navbarLink">Contacts</a>
          </span>
          <span id="buttonSpan">
            <NavLink exact to='/'>
              <button type="button" class="btn btn-success mx-2">
                Logout
              </button>
            </NavLink>
          </span>
        </div>
      </nav>
    </div>
  );
}

export default HomeNav;
