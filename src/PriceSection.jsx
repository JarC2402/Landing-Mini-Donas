import pack from './assets/pack.png'
import React, { useState, useEffect } from 'react';
import book from './assets/book.png'
import email from './assets/email.png'
import dowload from './assets/dowload.png'
import metodPay from './assets/metodPay.jpeg'

const PriceSection = () => {
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
    <div className='priceSectionAll'>
    <div className='packContent'>
        <div className='packCard'>
            <span className='tittleRed'>!Accede a esta gran cantidad de informacion al instante¡</span>
            <span className='tittleRed'> Podras descargarlo en tu celular y tenerlo a la mano siempre que lo necesites...</span>
            <img src={pack} alt="packimg"/>
            <span className='text1'> Si todo el extenso contenido se hubiera elaborado en formato de video, el costo seria considerablemente mas alto debido  a la produccion 
                    y edicion de videos. Por lo que para poder compartirle la mayor cantidad de informacion, hemos elegido el formato de E-book.
            </span>
        </div>
    </div>
    <div className='priceSection'>
        <div className='priceContent'>
            <div className='priceCard'>
                <span className='tittlePink'>¡ Aprovecha esta oferta por tiempo limitado !</span>
                <span className='bigWhite'>$29.99</span>
                <span className='text1'>Clic para ver precio en tu moneda</span>
                <button className='priceButton'>Si Quiero los E-Books</button>
            </div>
            <div className='timeCard'>
                <span className='text3'>Adquiere el e-book y los 3 recetarios, mas los 2 bonos de regalo a un super precio, y recibe el contenido de inmediato en tu correo electronico</span><br/>
                <span className='tittleWhite1'>LA OFERTA FINALIZA EN</span>
                <div className='timeScore'>{formatTime(timeLeft)}</div>
                <img  src={'https://emprendeconminidonas2.emprendedesdecasa.info/wp-content/uploads/2023/09/Image-2-1.png'} alt="metodPay"/>                       
            </div>
        </div>
    </div>
    <div className='imgSection'>
        <div className='imgContent'>
            <div className='imgCard'>
                <img src={book} alt="book"/>
                <span className='tittlePink'>Libro digital en formato PDF</span>
            </div>
            <div className='imgCard'>
                <img src={email} alt="email"/>
                <span className='tittlePink'>Recibelo de inmediato</span>
            </div>
            <div className='imgCard'>
                <img src={dowload} alt="dowload"/>
                <span className='tittlePink'>Descargarlo facilmente</span>
            </div>
        </div>
    </div>
    </div>
  )
}

export default PriceSection