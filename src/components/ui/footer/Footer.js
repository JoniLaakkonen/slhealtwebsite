import React from 'react'
import './Footer.css'
import { HomeMiniRounded } from '@mui/icons-material'
import { Link } from 'react-router-dom';
import { navItems } from "../../assets/NavItems";


export default function Footer() {
  return (
    <footer>
      <div className='container'>
        <img src="/assets/images/SL_HEALTH_LOGO_TXT_SANNA_SLHEALTH_WHITE.png" alt="Sl Health logo" className="footerlogo"/>
        <div className='ftr_contact'>
              <span id='footer-information'>
                  Yhteytstiedot:<br/>
                  
                  Sanna Laakkonen<br/>
                  sanna@slhealth.fi<br/>
                  +358 414346075<br/>
                  Ahomansikantie 21, <br/>
                  80160 Joensuu<br/>
                  <br/>
                  Y-tunnus: 2220355-4
              </span>
        </div>
        <div className='footer_nav'>
                <span id='footer-information'>Navigoi suoraan:</span>
                <ul>
                  {navItems.map(item => {
                      return(
                          <li key={item.id} className='footerNav' id={item.itemId}>
                              <Link to={item.path}>{item.title}</Link>
                          </li>
                      );}
                  )}
                </ul>
        </div>
        <div className='footer_some'>
              <span id='footer-information'> Seuraa sosiaalisessa mediassa:</span>
              <div>
                <a href='#'><img src="/assets/images/facebook-svg.png" alt="facebook logo" className="svgicon fa"/></a>
                <a href='#'><img src="/assets/images/instagram-svg.png" alt="instagram logo" className="svgicon ig"/></a>
              </div>
        </div>
      </div>
      <span id='tekjanoikeus'>@jonilaakkonen2023</span>
    </footer>
  )
}