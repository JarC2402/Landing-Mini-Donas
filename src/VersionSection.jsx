import React, { useState, useEffect } from 'react';
import version from './assets/version.png'
import metodPay from './assets/metodPay.jpeg'

const VersionSection = () => {

    const [timeLeft, setTimeLeft] = useState(3 * 60 * 60); // 24 horas en segundos
    useEffect(() => {
        // Actualiza el contador cada segundo
        const intervalId = setInterval(() => {
          setTimeLeft((prevTime) => {
            if (prevTime <= 1) {
              clearInterval(intervalId);
              return 0; // Detener el contador cuando llegue a 0
            }
            return prevTime - 1;
        });
      }, 1000);
       // Limpiar el intervalo cuando el componente se desmonte
    return () => clearInterval(intervalId);
}, []);
const formatTime = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  }; 
  
  return (
    <div className='versionSection'>
        <div className='versionContent'>
          <img src={version} alt="version"/>
          <div className='priceSection'>
              <div className='priceContentV'>
                  <div className='priceCardV'>
                      <span className='tittleWhite'>¡Hoy precio especial...!</span>
                      <span className='tittleWhite'><s>$29.99</s></span>
                      <span className='bigRed'>$22.49</span>
                      <span className='text1'>Clic para ver precio en tu moneda</span>
                      <button className='priceButton'>Si Quiero los E-Books</button>
                  </div>
                  <div className='timeCardV'>
                      <span className='tittlePink'>LA OFERTA FINALIZA EN</span>
                      <div className='timeScore'>{formatTime(timeLeft)}</div>
                      <img src={'https://emprendeconminidonas2.emprendedesdecasa.info/wp-content/uploads/2023/09/Image-2-1.png'} alt="metodPay"/>                       
                  </div>
              </div>
          </div>
        </div>
    </div>
  )
}

export default VersionSection