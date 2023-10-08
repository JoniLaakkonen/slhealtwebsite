import React, { useState }  from 'react'
import "./MainNavbar.css"
import { Link } from 'react-router-dom';
import { navItems } from "../../assets/NavItems";
import MenuButton from "../menubutton/MenuButton";

export default function MainNavbar() {
  
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
      <div className='mainnavoverlay'/>
      <div className="navbar-links">
        <ul className={navOpen ? "nav-items active" : "nav-items"}>
          <div className="mainNav-options left">
            {navItems.map(item => {
              if(item.position === "left"){
                  return(
                      <li key={item.id} className={item.cName} id={item.itemId} onClick={() => activateLink(item)} >
                          <Link id="mainNavA" className={item.title} to={item.path}>{item.title}</Link>
                      </li>
              );}
            })}
            </div> 
            <img src="/assets/images/SL_HEALTH_LOGO_TXT_SANNA_SLHEALTH.png" alt="Sl Health logo" className="logo-image"/>
            <div className="mainNav-options right">
            {navItems.map(item => {
              if(item.position === "right"){
                  return(
                      <li key={item.id} className={item.cName} id={item.itemId} onClick={() => activateLink(item)} >
                          <Link id="mainNavA" className={item.title} to={item.path}>{item.title}</Link>
                      </li>
              );}
            })} 
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
