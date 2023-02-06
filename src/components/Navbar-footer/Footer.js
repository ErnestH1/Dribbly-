import React from "react";
import "../../styles/Footer.css"

function Footer(){
    return(
<div id="section">

<footer className="footer-distributed">

    <div className="footer-right">
        <span>
        <a href="https://github.com/ErnestH1" target="_blank"><i className="fa fa-github"></i></a>
        <h6>Ernest Hanson</h6>
        </span>
        <span>
        <a href="https://github.com/jeffy2k" target="_blank" ><i className="fa fa-github"></i></a>
        <h6>Jeff Maina</h6>
        </span>
    </div>
    <div className="footer-right" id="rightIcons">
        <span> <a href="https://github.com/DianaCmaritim" target="_blank"><i className="fa fa-github"></i></a>
        <h6>Diana Maritim</h6>
        </span>
   <span> <a href="https://github.com/aligarad" target="_blank"><i className="fa fa-github"></i></a>
   <h6>Ken Hunja</h6>
   </span>
   
    </div>
    {/* <h4 className="footer-header">MOTTO:</h4> */}

    <div className="footer-left">
        
        <p>A WEBSITE FOR DEVELOPERS BY DEVELOPERS</p><br />

        {/* <p className="footer-links">
            <a className="link-1" href="#">Home</a>&nbsp;&nbsp;&nbsp;

            <a href="#">Blog</a>&nbsp;

            <a href="#">Pricing</a>&nbsp;

            <a href="#">About</a>&nbsp;

            <a href="#">Faq</a>&nbsp;

            <a href="#">Contact</a>
        </p> */}

        <p>&copy; &nbsp; Group 7 </p>
    </div>

</footer>
        </div>
    )
}

export default Footer;