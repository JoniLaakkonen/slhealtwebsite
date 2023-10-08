import React from 'react'
import './Header_etusivu.css'

export default function Header_etusivu() {
  return (
    <>
        <header id='Header_etusivu'>
            <img src='/assets/images/istockphoto-1262598521-1024x1024.jpg' alt='vanhus ja lapsi pellolla auringon laskussa' className='headerpicture etusivu' />
            <div className='headershadow'/>
            <div className='headeroverlay'>
              <h1>Pidä huolta kehostasi. <br/> Se on ainoa kotisi, josta et voi muuttaa pois.</h1>
              <p>- Jim Rohn -</p>
            </div>
        </header>
    </>
  )
}
