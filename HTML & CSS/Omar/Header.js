import React from "react";
function Header(){
    return(
        <header>
          
        <div className="header">
          <div className="container">
          <img class="logo" src="images/logo.png" alt="" />
            <div className="links">
              <span className="icon">
                <span></span>
                <span></span>
                <span></span>
              </span>
              <ul>
            <li><a href="#Home">Home</a></li>
            <li><a href="#Service">Service</a></li>
            <li><a href="#PORTFOLIO">PORTFOLIO</a></li>
            <li><a href="ABOUT">ABOUT</a></li>
            <li><a href="NEWS">NEWS</a></li>
            <li><a href="CONTACT">CONTACT</a></li>

          </ul>
            </div>
          </div>
        </div>
        </header>
    
    )
}
export default Header