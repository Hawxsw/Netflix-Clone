import React, {useState, useEffect} from "react";
import "../styles/components/Nav.css";

function Nav() {
const {show, handleShow} = useState(false);

const transitionNavBar = () => {
    if (window.scrollY > 100) {
        handleShow(true);  
    } else {
        handleShow(false);
    }
}

useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar)
}, [])

  return (
    <div className={`Nav ${show && 'nav_black'}`}>
      <div className="nav_contents">
        <img
          className="nav_logo"
          src="https://logodownload.org/wp-content/uploads/2014/10/netflix-logo-5.png"
          alt=""
        />

        <img
          className="nav_avatar"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default Nav;
