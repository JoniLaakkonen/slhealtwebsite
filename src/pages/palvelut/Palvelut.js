import React from 'react'
import Services2 from '../../components/ui/palvelut2.services/Services2'
import ServicesHeader from '../../components/ui/palvelut.header/ServicesHeader'
import Navbar from '../../components/ui/navbar/Navbar'
import Footer from '../../components/ui/footer/Footer'
import MapTo from '../../components/ui/map/MapTo'

export default function Palvelut() {
  return (
    <>
        <Navbar/>
        <ServicesHeader/>
        <Services2/>
        <MapTo/>
        <Footer/>
    </>
  )
}
