import React, { useState }  from 'react'
import "./Navbar2.css"
import { Link } from 'react-router-dom';
import { navItems } from "../../assets/NavItems";
import MenuButton from "../menubutton/MenuButton";

export default function Navbar2() {
  
  const [navOpen, setNavOpen] = useState(false);

  const activateLink = (item) => {
    setNavOpen(!navOpen) 
    if(item.title === "Etusivu")
    {
      item.itemID = "activeItem"
    }
    else if(item.title === "Tietoja")
    {
      item.itemID = "activeItem"
    }
    else if(item.title === "Ota Yhteyttä")
    {
      item.itemID = "activeItem"
    }
    else if(item.title === "Palvelut")
    {
      item.itemID = "activeItem"
    }
    else if(item.title === "Hinnasto")
    {
      item.itemID = "activeItem"
    }
    else if(item.title === "Ajanvaraus")
    {
      item.itemID = "activeItem"
    }
  }
  return (
    <nav>
      <div className='navoverlay2'/>
      <div className="navbar-links">
        <ul className={navOpen ? "nav-items active" : "nav-items"}>
            <img src="/assets/images/SL_HEALTH_LOGO_TXT_SANNA_SLHEALTH.png" alt="Sl Health logo" className="logo-image"/>
            <div className="nav-options">
            {navItems.map(item => {
                  return(
                      <li key={item.id} className={item.cName} id={item.itemId} onClick={() => activateLink(item)} >
                          <Link id="navA" className={item.title} to={item.path}>{item.title}</Link>
                      </li>
              );}
            )} 
          </div>   
        </ul>
          <img src="/assets/images/SL_HEALTH_LOGO_TXT_SANNA_SLHEALTH.png" alt="Sl Health logo" className="minmenu-logo"/>
          <div className="SMenuBtn" style={{zIndex:1001}} onClick={() => setNavOpen(!navOpen)}>
            <MenuButton />
          </div>
      </div>
    </nav>
  )
}
