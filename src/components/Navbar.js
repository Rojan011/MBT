import React, { useState, useEffect } from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  // //changes
  // const [isLoggedIn, setIsLoggedIn]=useState(localStorage.getItem('isLoggedIn'))
  
  // useEffect(()=>{
  //   setIsLoggedIn(localStorage.getItem('isLoggedIn'))
  // },[isLoggedIn])
  //changes

  const [isLoggedIn,setIsLoggedIn] = useState(false)

  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };


  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);
  
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <span className="mathi">Brain Tumor Detector</span>
            <i class="fas fa-brain" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            {/* Esma change garne jati */}
            { !isLoggedIn ?  <li className="nav-item"> 
              <Link
                to="/services"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Upload Image
              </Link>
            </li>:null

            
            }
           
            <li className="nav-item">
              <Link
                to="/products"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                MRI Information
              </Link>
            </li>
            <li>
              <Link to="/blog" className="nav-links" onClick={closeMobileMenu}>
                Health Advices
              </Link>
            </li>

            <li>
              <Link
                to="/sign-up"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Login
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle="btn--outline">LOG IN</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
