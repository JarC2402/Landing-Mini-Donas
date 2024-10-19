import React from 'react'
import imgHeader2 from './assets/img-header2.png'

const SubHeader = () => {
  return (
    <div className='headerContainer2'>
        <div className='headerCard2'>
            <span className='tittleRed'>! Imagina tener tu propio negocio sin salir de casa ¡</span>
            <span className='tittleRed2'>solo necesitas ingredientes de tu cocina....</span>
            <div className='headerCard1'>
                <img src={imgHeader2} alt="imgHeader" />
                <div>
                    <p className='subTitleRed'>si te gustaria....</p>                
                    <ul>
                        <li>✓  No tener que dejar a tus hijos pequeños para ir a trabajar...</li>
                        <li>✓  Tener el dinero que necesitas para esos imprevistos...</li>
                        <li>✓  Organizar tu tiempo a tu antojo...</li>
                        <li>✓  Olvidarte para siempre de tu jefe...</li>
                        <li>✓  Treabajar por tus propios sueños...</li>
                        <li>✓  O simplemente tener tu propio negocio en casa...</li>
                    </ul>
                </div>                
            </div>
            <span className='subTitleRed'>Esto es justo para ti.</span>
            <span className='subTitleRed'>!!! Muchas mujeres trabajan desde casa y tu tambien puedes hacerlo</span>
        </div>
    </div>
  )
}

export default SubHeader