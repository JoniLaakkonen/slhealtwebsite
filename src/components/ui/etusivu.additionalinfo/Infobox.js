import React from 'react'
import './Infobox.css'

export default function Infobox() {
  return (
    <section id='infobox'>
            <div className='info_item'>
                <h3>Palvelut</h3>
                <p>Lorem Ipsum on yksinkertaisesti testausteksti, jota tulostus- ja ladontateollisuudet käyttävät. 
                    Lorem Ipsum on ollut teollisuuden normaali testausteksti jo 1500-luvulta asti, jolloin tuntematon 
                    tulostaja otti kaljuunan ja sekoitti sen tehdäkseen m Ipsumista</p>
                <a href='#'>Lisätietoja...</a>
            </div>
            <div className='info_item'>
                <h3>Yritys</h3>
                <p>esimerkkikirjan. Se ei ole selvinnyt vain viittä vuosisataa, mutta myös loikan elektroniseen kirjoitukseen, 
                    jääden suurinpiirtein muuntamattomana. </p>
                <a href='#'>Lisätietoja...</a>
            </div>
            <div className='info_item'>
                <h3>Ajanvaraus</h3>
                <p>Se tuli kuuluisuuteen 1960-luvulla kun Letraset-paperiarkit, joissa oli Lorem Ipsum pätkiä, julkaistiin ja vielä 
                    myöhemmin tietokoneen julkistusohjelmissa, kuten Aldus PageMaker joissa oli versioita Lore</p>
                <a href='#'>Lisätietoja...</a>
            </div>
    </section>
  )
}
