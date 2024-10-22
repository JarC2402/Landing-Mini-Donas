import React from 'react'
import { useState } from 'react'
import NancyRobles from './assets/NancyRobles.png'

const QuestionSection = () => {
  const [isShow, setIsShow] = useState(false)
  const handleShow = () => {setIsShow(!isShow)}

  const [isShow1, setIsShow1] = useState(false)
  const handleShow1 = () => {setIsShow1(!isShow1)}

  const [isShow2, setIsShow2] = useState(false)
  const handleShow2 = () => {setIsShow2(!isShow2)}

  const [isShow3, setIsShow3] = useState(false)
  const handleShow3 = () => {setIsShow3(!isShow3)}

  const [isShow4, setIsShow4] = useState(false)
  const handleShow4 = () => {setIsShow4(!isShow4)}

  const [isShow5, setIsShow5] = useState(false)
  const handleShow5 = () => {setIsShow5(!isShow5)}
  
  return (
    <div className='QuestionSection'>
        <span className='bigTitleRed'>¡No estaras sola!</span>
        <span className='bigTitleRed'>Preguntale a la experta:</span>
        <div className='perfilSection'>
            <div className='perfilCard'>
                <span className='text3'>Tu compra incluye asesoria de forma rapida y personalizada. Podras preguntarle todas tus dudas a la propia autora.</span><br/>
                <span className='text3'>Este E-book ha sido escrito con la guia experta de Lucy Robles, una reconocida coach gastronomica con mas de 25 años de experiencia, integrante del equipo de Neopostres.</span><br/>
                <span className='text3'>Su gran pasion por la resposteria la ha llevado a la docencia y a la creacion de recetas deliciosas y sorpredentes. Y ha ayudado a muchas emprendedoras como tu, a iniciar desde cero su propio negocio en casa.</span><br/>
                <span className='text3'>Asi que preparate para convertir tus cocina en un negocio exitoso de la mano de una experta.</span>
            </div>
            <img src={NancyRobles} alt="NancyRobles" />
        </div>
        <span className='bigTitleRed'>Preguntas Frecuentes</span>
       <div className='cardPensum'>
        <div className='despleCardQ'>
            <button onClick={handleShow}>{isShow? <i className="fa-solid fa-caret-right fa-rotate-270"></i>:<i className="fa-solid fa-caret-right"></i>}</button>   
            <span>¿Es un curso en video?</span>                                     
          </div>
          <div className={`despleCardContents ${isShow ? 'show' : ''}`}>
            <div className='despleList'>
                <div className='textQ'><span >No, no son videos. En realidad, abordamos una gran cantidad  de informacion y si hubieramos optado por  utilizar videos el costo seria mucho mas elevado. Para hacerlo accesible, hemos decidido ofrecerlo en formato de libro digital.</span></div>
            </div>
          </div> 
       </div>
       <div className='cardPensum'>
        <div className='despleCardQ'>
            <button onClick={handleShow1}>{isShow1? <i className="fa-solid fa-caret-right fa-rotate-270"></i>:<i className="fa-solid fa-caret-right"></i>}</button>   
            <span>¿Que necesito para leer los E-books?</span>                                     
          </div>
          <div className={`despleCardContents ${isShow1 ? 'show' : ''}`}>
            <div className='despleList'>
                <div className='textQ'><span >Lo unico que vas a necesitar es un dispositivo para leer PDF. Ya sea un telefono, computadora, laptop o cualquier otro dispositivo digital adecuado para ello.</span></div>
            </div>
          </div> 
       </div>
       <div className='cardPensum'>
        <div className='despleCardQ'>
            <button onClick={handleShow2}>{isShow2? <i className="fa-solid fa-caret-right fa-rotate-270"></i>:<i className="fa-solid fa-caret-right"></i>}</button>   
            <span>¿Como voy a resolver mis dudas?</span>                                     
          </div>
          <div className={`despleCardContents ${isShow2 ? 'show' : ''}`}>
            <div className='despleList'>
                <div className='textQ'><span >¡No estaras sola! Si tienes alguna pregunta o necesitas aclarar tus dudas, la propia autora y su equipo estan disponibles para ayudarte rapidamente a traves del correo electronico.</span></div>
            </div>
          </div> 
       </div>
       <div className='cardPensum'>
        <div className='despleCardQ'>
            <button onClick={handleShow3}>{isShow3? <i className="fa-solid fa-caret-right fa-rotate-270"></i>:<i className="fa-solid fa-caret-right"></i>}</button>   
            <span>¿Como accedo al E-book?</span>                                     
          </div>
          <div className={`despleCardContents ${isShow3 ? 'show' : ''}`}>
            <div className='despleList'>
                <div className='textQ'><span >Inmediatamente haces el pago te llega el acceso por mail con un boton de enlace. Es sumanmente facil. Sigue las indicaciones que ahi se te dan. Solo en caso que elijas hacer el pago en efectivo, tarda un poco mas, entre 24 y 48 horas.</span></div>
            </div>
          </div> 
       </div>
       <div className='cardPensum'>
        <div className='despleCardQ'>
            <button onClick={handleShow4}>{isShow4? <i className="fa-solid fa-caret-right fa-rotate-270"></i>:<i className="fa-solid fa-caret-right"></i>}</button>   
            <span>¿Que ventajas tiene que sea libro digital?</span>                                     
          </div>
          <div className={`despleCardContents ${isShow4 ? 'show' : ''}`}>
            <div className='despleList'>
                <div className='textQ'>
                  <span >La principal ventaja en comparacion a los cursos en video es que  el contenido es muy amplio y mucho mas extenso que el promedio de los cursos en video.</span><br/>
                  <span >Ademas, es de facil consulta, ya que puedes descargarlo y tenerlo siempre a mano, incluso en tu telefono celular. Esto te permite acceder al contenido en cualquier momento y en cualquier lugar, sin necesidad de internet.</span><br/>
                  <span >Y lo mejor es el costo. Si todo el contenido se hubiera elaborado en formato de video, el costo considerablemente mas alto debido a la produccion y edicion de los videos.</span><br/>
                </div>
            </div>
          </div> 
       </div>
       <div className='cardPensum'>
        <div className='despleCardQ'>
            <button onClick={handleShow5}>{isShow5? <i className="fa-solid fa-caret-right fa-rotate-270"></i>:<i className="fa-solid fa-caret-right"></i>}</button>   
            <span>¿Es seguro mi pago?</span>                                     
          </div>
          <div className={`despleCardContents ${isShow5 ? 'show' : ''}`}>
            <div className='despleList'>
                <div className='textQ'><span >¡Si! no te preocupes TU PAGO ES SEGURO. Se realiza de forma 100% segura por medio de hotmart, la plataforma de cursos mas grande segura de habla hispana. Puedes buscar en Google o youtube que es Hotmart. Ademas incluye garantia de 7 dias, para que  tengas el tiempo suficiente de revisar que si  recibiste todo lo que incluye la compra.</span></div>
            </div>
          </div> 
       </div>
    </div>
  )
}

export default QuestionSection

