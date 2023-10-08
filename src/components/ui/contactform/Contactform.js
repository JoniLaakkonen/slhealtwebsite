import React from 'react'
import './Contactform.css'
import './OtayhteyttaHeader.css'

export default function Contactform() {
  return (
    <>
    <img src='/assets/images/istockphoto-1352825541-1024x1024.jpg' alt='kädet syvdämen asennossa aurinkoa kohti' className='headerpicture_contact' />
    <div className='otayhteyttaheadershadow'/>
    <div className='otayhteyttaheadertextbox'>
      <h1>Ollaan yhteydessä!</h1>
    </div>
    <div className="form-box">
        <form onSubmit=''>
            <label> Yhteydenotto-<br/>lomake </label>
            <input placeholder="Etunimi"/>
            <input placeholder="Sukunimi"/>
            <input placeholder="Sähköposti"/>
            <textarea placeholder="Viesti..."/>
            <button type="submit" id="submitBtn" className="submitBtn">{" "}Lähetä</button>
        </form>
        <aside>
                <h4>SL Health</h4>

                <section>
                    <h5>Puhelin:</h5>
                    <address>+358 41 434 6075</address>
                </section>
                <section>
                    <h5>Sähköposti:</h5>
                    <address>sanna@slhealth.fi</address>
                </section>
                <section>
                    <h5>Osoite:</h5>
                    <address>Ahomansikantie 21,<br/>
                    80160, <br/>
                    Joensuu,<br/>
                    Suomi, FI</address>
                </section>
                <section>
                    <h5>Y-tunnus: </h5>
                    <address>2220355-4</address>
                </section>
        </aside>
    </div>
    </>
  )
}
