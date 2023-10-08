import React from 'react'
import './ServicesHeader.css'

export default function ServicesHeader() {
  return (
    <header id='Header_palvelut'>
        <img src='https://assets.omastore.fi/slhealth/images/b1a1ad19-14d7-4d67-a5a2-169a74d8908f.jpg' alt='kädet syvdämen asennossa aurinkoa kohti' className='headerpicture palvelut' />
        <div className='palvelutheadershadow'>
            <h1>Palvelut</h1>
        </div>
    </header>
  )
}
