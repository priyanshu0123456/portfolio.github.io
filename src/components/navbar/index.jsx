import React, { useState } from "react";
import {FaBars, FaReact} from "react-icons/fa";
import {HiX} from "react-icons/hi"
import {Link} from 'react-router-dom';
import "./style.scss";

const data = [
    {
        label: "Home",
        to: "/",
    },

    {
        label:"About me",
        to:"/about"
    },

    {
        label: "SKILLS",
        to: "/skills",
    },

    {
        label:"RESUME",
        to:"/resume",
    },

    {
        label: "My Portfolio",
        to: "/Myportfolio",
    },

    {
        label:"CONTACT",
        to:"/contact",
    },

]  
const Navbar = () => {
  const [toggleIcon, setToggleIcon] = useState(false);
    const handleToggleIcon = () => {
      
        setToggleIcon(!toggleIcon);

    };
    return (
        <div>
       <nav className="navbar">
         <div className="navbar__container">
            <Link to={"/"} className="navbar__container__logo">
            <FaReact size={30}/>
            </Link>

         </div>
         <ul className= {`navbar__container__menu ${toggleIcon ? "active" : ""}`}>
            {
                data.map((items, key) => (
                    <li key={key}  className="navbar__container__menu__items">
                      <Link className="navbar__container__menu__links" to={items.to}>
                       {items.label}
                      </Link>
                    </li>
                ))
            }

         </ul>
         <div className="nav-icon" onClick={handleToggleIcon}>
          {
            toggleIcon?<HiX size={30}/> : <FaBars size={30}/>
          }
         </div>
       </nav>
        </div>
    )
}

export default Navbar;