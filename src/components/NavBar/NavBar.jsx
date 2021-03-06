import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import { CgDarkMode } from "react-icons/cg";

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  let clickedState = "clicked";
  const body = document.body;
  const lightMode = "light";
  const darkMode = "dark";
  let mode = localStorage.getItem("mode");

  if (mode === lightMode || mode === darkMode) {
      body.classList.add(mode);
  } else {
      body.classList.add(lightMode);
  }

  const switchMode = (e) => {
      if (mode === darkMode) {
          body.classList.replace(darkMode, lightMode);
          e.target.classList.remove(clickedState);
          localStorage.setItem("mode", "light");
          mode = lightMode
      } else {
          body.classList.replace(lightMode, darkMode);
          e.target.classList.add(clickedState);
          localStorage.setItem("mode", "dark");
          mode = darkMode;
      }
  }



  return (
    <>
      <nav className='navbar'>
      <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          André Gonçalves
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className='nav-item'>
            <Link to='/MyProjects' className='nav-links' onClick={closeMobileMenu}>My Projects
            </Link>
          </li>
        </ul>
        <button 
            className={mode === "dark" ? clickedState : ""}
            onClick={(e) => switchMode(e)}
            >
               <CgDarkMode />
            </button>
      </nav>
    </>
  );
}

export default Navbar;