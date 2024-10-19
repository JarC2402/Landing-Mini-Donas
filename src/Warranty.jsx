import React from 'react'
import pack from './assets/pack.png'
import garantia from './assets/garantia.png'


const Warranty = () => {
  return (
    <div className='warrantySection'>
        <div className='warrantyCard'>
            <span className='text1'>Aprende a tu propio ritmo, desde la comodidad de tu hogar, y aprovecha la oportunidad de resolver tus dudas preguntándole a la propia autora: Lucy Robles</span>
            <span className='tittleRed'>¡NO TIENES NADA QUE PERDER!</span>
            <div className='imgGarantia'><img src={garantia} alt="garantia"/></div>
            <span className='text1'>Tu compra se encuentra protegida. Si no es lo que esperabas, Hotmart te regresa el 100% de tu dinero sin hacerte ningun tipo de pregunta. Solo tienes solicitarlo dentro de los 7 primeros dias posteriores a tu compra.</span>
            <div className='imgPack'><img src={pack} alt="pack"/></div>
        </div>
    </div>
  )
}

export default Warranty