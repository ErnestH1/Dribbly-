import React from "react";
import "../styles/Profile.css"

function Profile({email,name}){

    return(
        <div>
            <div class="container">
                <div class="navigation">
                    <div class="user-box">
                        <div class="image-box">
                            {/* <img src="https://cdn.vectorstock.com/i/1000x1000/08/19/gray-photo-placeholder-icon-design-ui-design-icon-vector-35850819.webp" alt="avatar"/> */}
                            </div>
                            <p class="username"></p>
                            </div>
                            <div onClick={() => document.querySelector('.navigation').classList.toggle('active')} class="menu-toggle"></div>
    <ul class="menu">
        <div id="profilePic">

        </div>
      <li id="userNameProf">{name}</li>
      <li id="userEmail">{email}</li>
      <li id="location"><i className="material-icons">location_on</i><h6>Earth</h6></li>
      <li id="calendar"><i className="material-icons" >calendar_today</i><h6>23 may 2004</h6></li>
  </ul>
</div>
</div>
</div>
        
    )
}

export default Profile;