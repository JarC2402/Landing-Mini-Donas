import React from 'react'
import imgHeader from './assets/imagen-header.png'


const Header = () => {
  return (
   <>
    <div className='headerContainer'>
        <div className='headerCard'>
            <div className='tittleWhite'>! Tu puedes ganar dinero sin descuidar tu hogar ¡</div>
            <img src={imgHeader} alt="imgHeader" />
        </div>        
    </div>
   </>
  )
}

export default Header