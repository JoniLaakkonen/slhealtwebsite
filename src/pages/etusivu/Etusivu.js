import React from 'react'
import MainNavbar2 from '../../components/ui/navbar/MainNavbar2'
import Header_etusivu from '../../components/ui/etusivu.header/Header_etusivu'
import Tagline_etusivu from '../../components/ui/etusivu.tagline/Tagline_etusivu'
import Serviceshowcase from '../../components/ui/etusivu.serviceshowcase/Serviceshowcase'
import Quotation from '../../components/ui/etusivu.quote/Quotation'
import Infobox from '../../components/ui/etusivu.additionalinfo/Infobox'
import Map from '../../components/ui/footermap/Map'
import Footer from '../../components/ui/footer/Footer'
import MapTo from '../../components/ui/map/MapTo'

export default function Etusivu() {
  return (
    <>
      <main>
        <MainNavbar2/>
        <Header_etusivu/>
        <Tagline_etusivu/>
        <Serviceshowcase/>
        <Quotation/>
        <Infobox/>
        <MapTo/>
        <Footer/>
      </main>
    </>
  )
}
