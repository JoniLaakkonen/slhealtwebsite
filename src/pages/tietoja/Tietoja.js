import React from 'react'
import Navbar2 from '../../components/ui/navbar/Navbar2'
import TietojaHeader from '../../components/ui/tietoja.header/TietojaHeader'
import Personalcard from '../../components/ui/tietoja.personalcard/Personalcard'
import Compbox from '../../components/ui/tietoja.compbox/Compbox'
import Palveluihin from '../../components/ui/button.palveluihin/Palveluihin'
import Footer from '../../components/ui/footer/Footer'
import MapTo from '../../components/ui/map/MapTo'

export default function Tietoja() {
  return (
    <>
        <Navbar2/>
        <TietojaHeader/>
        <Personalcard/>
        <Compbox/>
        <Palveluihin/>
        <MapTo/>
        <Footer/>
    </>
  )
}
