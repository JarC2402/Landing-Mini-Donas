import React from 'react'
import inversion from './assets/inversion2.png'

const Investment = () => {
  return (
    <div className='investContent'>
        <div className='investCart'>
            <span className='tittleWhite'>Esta puede ser tu mejor inversion</span>
            <span className='tittleWhite'> Crea tu propio negocio y gana dinero sin descuidar tu hogar</span><br/>
            <img src={inversion} alt="inversion"/>
        </div>
    </div>
  )
}

export default Investment