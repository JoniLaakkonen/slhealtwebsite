import React, { useState } from 'react'
import './Services2.css'
import { ServiceItems } from '../../assets/ServiceItems'

export default function Services() {
  const [items, setItems] = useState(ServiceItems);

  const toggleServiceText = (index) => {
    const updatedItems = [...items];
    updatedItems[index].isTextVisible = !updatedItems[index].isTextVisible;
    updatedItems[index].buttonText = updatedItems[index].isTextVisible ? 'Näytä vähemmän' : 'Lue lisää';
    setItems(updatedItems);
  };

  return (
        <section id='Services_content2'>
            {ServiceItems.map((item, index) => {
                const isEven = index % 2 === 0;
                const containerClassName = isEven ? 'service_container even' : 'service_container odd';            
                const pricesArray = item.prices.split(',');
                const textArray = item.text.split(';');
                return(
                    <div className={containerClassName}>
                        <img src={`/assets/images/${item.image}`} alt='...' className={`servicecont_img ${item.isTextVisible ? 'visible' : 'hidden'}`} />
                        <div className='service_info'>
                            <h2>{item.title}</h2>
                            <div className='prices'>
                                {pricesArray.map((price, index) => (
                                    <p key={index} >{price}</p>
                                ))}
                            </div>
                            {textArray.map((texts, index) => (
                                    <p key={index} className={`service_text ${item.isTextVisible ? 'visible' : 'hidden'}`}>{texts}</p>
                                ))}
                            <section className='scardButtons'>
                                <button onClick={() => toggleServiceText(index)}>{item.buttonText}</button>
                                <a href='#' className='linktoService'>Varaa Aika</a>
                            </section>
                        </div>
                    </div>
                )
            })}
        </section>
  )
}
