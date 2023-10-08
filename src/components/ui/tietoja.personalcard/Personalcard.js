import React from 'react'
import { ArrowDownwardOutlined } from '@mui/icons-material'
import { linkTo } from '../../../hooks/linkTo'
import './Personalcard.css'

export default function Personalcard() {
  return (
    <div className='tietojacntr'>
      <article id='personalcard'>
          <img src='/assets/images/mies-etusivu-4.jpg' alt=''/>
          <h4>Sanna Laakkonen</h4>
          <p>Olen Sanna Laakkonen Joensuusta. Työajan ulkopuolella minut pitävät virkeänä perheeni ja koirat huolehtivat päivittäisestä ulkoilusta joka säällä. Olen valmistunut sairaanhoitajaksi vuonna 1997. Lasten ollessa pieniä kouluttauduin dipl. vyöhyketerapeutiksi Charles Ersdalin oppien mukaan. Vyöhyketerapian myötä opin ymmärtämään ihmistä kokonaisuutena ja ihmisen fysiologia alkoi kiinnostamaan minua yhä enemmän. <br/><br/>Oman toiminimen SL Health perustin vuonna 2008. Tein kuitenkin sairaanhoitajan työtä lasten ollessa pieniä. Toimin Joensuussa sairaanhoitajana pääasiassa päivystystyössä, ensin perusterveydenhuollon päivystyksessä ja sittemmin yhteispäivystyksessä – antoisaa ja vaativaa työtä, sekä upeita ihmisiä!</p>
      </article>
    </div>
  )
}
