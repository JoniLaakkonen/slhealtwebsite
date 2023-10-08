import React from 'react'
import './Serviceshowcase.css'
import { ServiceItems } from "../../assets/ServiceItems";

export default function Serviceshowcase() {
  return (
    <section id='services_etusivu'>
        {ServiceItems.map(item => {
                  return(
                      <div className='servicecard'>
                        <figure>
                            <img src={`/assets/images/${item.image}`} alt='...' className='servicecard_img'/>
                            <figcaption style={{backgroundColor:`${item.backgroundColor}`}}>{item.title}</figcaption>
                        </figure>
                        <p>{item.description}</p>
                        <button>VARAA AIKA</button>
                      </div>
                )
            })}
    </section>
  )
}
