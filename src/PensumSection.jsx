import React from 'react'
import { useState } from 'react'
import imgpensum from './assets/img-pensum.png'

export const PensumSection = () => {
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

    const [isShow6, setIsShow6] = useState(false)
    const handleShow6 = () => {setIsShow6(!isShow6)}

    const [isShow7, setIsShow7] = useState(false)
    const handleShow7 = () => {setIsShow7(!isShow7)}

    const [isShow8, setIsShow8] = useState(false)
    const handleShow8 = () => {setIsShow8(!isShow8)}

    const [isShow9, setIsShow9] = useState(false)
    const handleShow9 = () => {setIsShow9(!isShow9)}

    const [isShow10, setIsShow10] = useState(false)
    const handleShow10 = () => {setIsShow10(!isShow10)}

    const [isShow11, setIsShow11] = useState(false)
    const handleShow11 = () => {setIsShow11(!isShow11)}

    const [isShow12, setIsShow12] = useState(false)
    const handleShow12 = () => {setIsShow12(!isShow12)}

    const [isShow13, setIsShow13] = useState(false)
    const handleShow13 = () => {setIsShow13(!isShow13)}
  return (
    <div className='pensumSection'>
        <span className='tittleWhite'>Descubre el paso a paso para crear tu negocio de Mini Donas...</span>
        <div className='pensumCardContainer'>
            <div className='cardPensum'>
                <span className='tittlePink'>Primera parte:</span>
                <span className='tittlePink'>Como elaborar delicionasas donas y mini donas</span>
                <div className='despleCardQ'>
                        <button onClick={handleShow}>{isShow? <i class="fa-solid fa-caret-right fa-rotate-270"></i>:<i class="fa-solid fa-caret-right"></i>}</button>   
                        <span>MODULO 1: PRESENTACION Y BIENBENIDA</span>                          
                </div>
                <div className={`despleCardContents ${isShow ? 'show' : ''}`}>
                    <div className='despleList'>
                        <ul>
                            <li>Leccion 1: Bienvenida. ¿Quien soy yo?</li>
                            <li>Leccion 2: ¿Por que elegir mini donas?</li>
                            <li>Leccion 3: Su actual demanda en el mercado.</li>                            
                        </ul> 
                    </div>
                </div>
                <div className='despleCardQ'>
                        <button onClick={handleShow1}>{isShow1?<i class="fa-solid fa-caret-right fa-rotate-270"></i>:<i class="fa-solid fa-caret-right"></i>}</button>   
                        <span>MODULO 2: TIPOS DE DONAS</span>                          
                </div>
                <div className={`despleCardContents ${isShow1 ? 'show' : ''}`}>
                    <div className='despleList'>
                        <ul>
                            <li>Leccion 4: Conoce 3 tipos de donas de acuerdo a su elaboracion.</li>
                            <li>Leccion 5: Donas fritas.</li>
                            <li>Leccion 6: Donas Horneadas.</li>
                            <li>Leccion 6: Mini donas en maquina electrica.</li>                            
                        </ul> 
                    </div>
                </div> 
                <div className='despleCardQ'>
                        <button onClick={handleShow2}>{isShow2?<i class="fa-solid fa-caret-right fa-rotate-270"></i>:<i class="fa-solid fa-caret-right"></i>}</button>   
                        <span>MODULO 3: DONAS FRITAS</span>                          
                </div>
                <div className={`despleCardContents ${isShow2 ? 'show' : ''}`}>
                    <div className='despleList'>
                        <ul>
                            <li>Leccion 8: Introduccion a las donas fritas.</li>
                            <li>Leccion 9: Tecnica de produccion paso a pasito.</li>
                            <li>Leccion 10: Receta de donas fritas elaboradas con polvo de hornear.</li>                            
                            <li>Leccion 11: Receta de donas fritas elaboradas con levadura.</li>                            
                            <li>Leccion 12: Errores que debes evitar.</li>                            
                        </ul> 
                    </div>
                </div> 
                <div className='despleCardQ'>
                        <button onClick={handleShow3}>{isShow3?<i class="fa-solid fa-caret-right fa-rotate-270"></i>:<i class="fa-solid fa-caret-right"></i>}</button>   
                        <span>MODULO 4: DONAS HORNEADAS</span>                          
                </div>
                <div className={`despleCardContents ${isShow3 ? 'show' : ''}`}>
                    <div className='despleList'>
                        <ul>
                            <li>Leccion 13: Introduccion a las donas horneadas.</li>
                            <li>Leccion 14: Tecnica de preparacion paso a pasito.</li>
                            <li>Leccion 15: Receta donas de vainilla.</li>
                            <li>Leccion 16: Receta donas de chocolate.</li>
                            <li>Leccion 17: Recetas donas de canela.</li>
                            <li>Leccion 18: Receta donas de jarabe de arce.</li>
                            <li>Leccion 19: Receta donas con cidra de manzana.</li>
                            <li>Leccion 20: Receta red velvet.</li>
                            <li>Leccion 21: Receta donas de nuetella.</li>
                            <li>Leccion 22: Receta donas de nuez.</li>
                            <li>Leccion 23: Receta donas de platano.</li>
                            <li>Leccion 24: Receta donas de coco.</li>   
                            <li>Leccion 25: Receta donas de manzana.</li>
                            <li>Leccion 26: Receta donas de choco chip.</li>
                            <li>Leccion 27: Receta donas de matcha.</li>
                            <li>Leccion 28: Receta donas de naranja.</li>
                            <li>Leccion 29: Receta donas de limon.</li>
                            <li>Leccion 30: Receta donas de moka.</li>   
                            <li>Leccion 31: Receta donas veganas de almendra.</li>
                            <li>Leccion 32: Receta donas veganas de coco.</li>
                            <li>Leccion 33: Errores que debes evitar.</li>                            
                        </ul> 
                    </div>
                </div> 
                <div className='despleCardQ'>
                        <button onClick={handleShow4}>{isShow4?<i class="fa-solid fa-caret-right fa-rotate-270"></i>:<i class="fa-solid fa-caret-right"></i>}</button>   
                        <span>MÓDULO 5: MINI DONAS ELABORADAS EN MÁQUINA ELÉCTRICA</span>                          
                </div>
                <div className={`despleCardContents ${isShow4 ? 'show' : ''}`}>
                    <div className='despleList'>
                        <ul>
                            <li>Lección 34: Introducción a las donas elaboradas en máquina eléctrica.</li>
                            <li>Lección 35: Técnica de preparación paso a pasito.</li>
                            <li>Lección 36: Receta donas de vainilla.</li>
                            <li>Lección 37: Receta donas de chocolate.</li>
                            <li>Lección 38: Receta donas de canela.</li>
                            <li>Lección 39: Receta donas de rompope.</li>
                            <li>Lección 40: Receta donas de nuez.</li>
                            <li>Lección 41: Receta donas de maple.</li>
                            <li>Lección 42: Receta donas de café.</li>
                            <li>Lección 43: Receta donas de manzana.</li>
                            <li>Lección 44: Receta donas de leche condensada</li>
                            <li>Lección 45: Receta donas de Nutella.</li>
                            <li>Lección 46: Receta donas de coco.</li>
                            <li>Lección 47: Receta donas de miel.</li>
                            <li>Lección 48: Receta donas de almendras</li>
                            <li>Lección 49: Receta donas de choco chip</li>
                            <li>Lección 50: Receta donas de moka.</li>
                            <li>Lección 51: Receta donas veganas de almendras.</li>
                            <li>Lección 52: Receta donas veganas de manzana.</li>
                            <li>Lección 53: Receta donas veganas de coco.</li>
                            <li>Lección 54: Receta donas veganas de chocolate.</li>
                            <li>Lección 55: Receta donas veganas de jarabe de arce.</li>
                            <li>Lección 56: Errores que debes evitar.</li>
                        </ul> 
                    </div>
                </div> 
                <div className='despleCardQ'>
                        <button onClick={handleShow5}>{isShow5?<i class="fa-solid fa-caret-right fa-rotate-270"></i>:<i class="fa-solid fa-caret-right"></i>}</button>   
                        <span>MÓDULO 6: CÓMO DECORAR DONAS Y MINI DONAS</span>                          
                </div>
                <div className={`despleCardContents ${isShow5 ? 'show' : ''}`}>
                    <div className='despleList'>
                        <ul>
                            <li>Leccion 1: Bienvenida. ¿Quien soy yo?</li>
                            <li>Leccion 2: ¿Por que elegir mini donas?</li>
                            <li>Leccion 3: Su actual demanda en el mercado.</li>
                            <li>Lección 57: El glaseado y decorado</li>
                            <li>Lección 58: Técnica para glasear paso a pasito.</li>
                            <li>Lección 59: Receta de glaseado de vainilla.</li>
                            <li>Lección 60: Receta de glaseado de chocolate.</li>
                            <li>Lección 61: Receta de glaseado de coco</li>
                            <li>Lección 62: Receta de glaseado de canela.</li>
                            <li>Lección 63: Receta de glaseado de moka.</li>
                            <li>Lección 64: Receta de glaseado de cajeta.</li>
                            <li>Lección 65: Receta de glaseado de sidra de manzana</li>
                            <li>Lección 66: Receta de glaseado de Nutella.</li>
                            <li>Lección 67: Receta de glaseado de chocolate semi dulce.</li>
                            <li>Lección 68: Receta de glaseado de jarabe de arce.</li>
                            <li>Lección 69: Receta de glaseado de fresa.</li>
                            <li>Lección 70: Receta de glaseado de café.</li>
                            <li>Lección 71: Receta de glaseado de limón.</li>
                            <li>Lección 72: Receta de glaseado de manzana.</li>
                            <li>Lección 73: Receta de glaseado de matcha.</li>
                            <li>Lección 74: Receta de glaseado de rompope.</li>   
                            <li>Lección 75: Receta de glaseado de queso crema.</li> 
                            <li>Lección 76: Receta de glaseado de maple.</li> 
                            <li>Lección 77: Ideas de toppings para decorar.</li>                         
                        </ul> 
                    </div>
                </div>                 
            </div>
            <div className='cardPensum'>
                <span className='tittlePink'>Segunda parte:</span>
                <span className='tittlePink'>Como emprender con exito desde casa</span>
                <div className='despleCardQ'>
                            <button onClick={handleShow6}>{isShow6?<i class="fa-solid fa-caret-right fa-rotate-270"></i>:<i class="fa-solid fa-caret-right"></i>}</button>   
                            <span>MÓDULO 7: EMPRENDE DESDE CASA</span>                          
                </div>
                <div className={`despleCardContents ${isShow6 ? 'show' : ''}`}>
                        <div className='despleList'>
                            <ul>
                                <li>Lección 78: Un poco de historia.</li>
                                <li>Lección 79: Es hora de contar tu propia historia.</li>
                                <li>Lección 80: Hábitos para trabajar desde casa.</li>
                                <li>Lección 81: Tu espacio de trabajo.</li> 
                                <li>Lección 82: Equipo y utensilios</li>                           
                            </ul> 
                        </div>
                </div> 
                <div className='despleCardQ'>
                            <button onClick={handleShow7}>{isShow7?<i class="fa-solid fa-caret-right fa-rotate-270"></i>:<i class="fa-solid fa-caret-right"></i>}</button>   
                            <span>MÓDULO 8: DISEÑA TUS MINI DONAS Y DESARROLLA TU MARCA</span>                          
                </div>
                <div className={`despleCardContents ${isShow7 ? 'show' : ''}`}>
                        <div className='despleList'>
                            <ul>
                                <li>Lección 83: Estudio de mercado</li>
                                <li>Lección 84: Diseña tus mini donas.</li>
                                <li>Lección 85: Desarrolla tu marca.</li>                            
                            </ul> 
                        </div>
                </div> 
                <div className='despleCardQ'>
                            <button onClick={handleShow8}>{isShow8?<i class="fa-solid fa-caret-right fa-rotate-270"></i>:<i class="fa-solid fa-caret-right"></i>}</button>   
                            <span>MÓDULO 9: PROVEEDORES, PRESENTACIÓN Y EMPAQUE</span>                          
                </div>
                <div className={`despleCardContents ${isShow8 ? 'show' : ''}`}>
                        <div className='despleList'>
                            <ul>
                                <li>Lección 86: Cómo elegir proveedores.</li>
                                <li>Lección 87: Presentación y empaque.</li>
                                <li>Lección 88: Gestión de entregas.</li>                            
                            </ul> 
                        </div>
                </div> 
                <div className='despleCardQ'>
                            <button onClick={handleShow9}>{isShow9?<i class="fa-solid fa-caret-right fa-rotate-270"></i>:<i class="fa-solid fa-caret-right"></i>}</button>   
                            <span>MÓDULO 10: ESTABLECE EL PRECIO DE VENTA</span>                          
                </div>
                <div className={`despleCardContents ${isShow9 ? 'show' : ''}`}>
                        <div className='despleList'>
                            <ul>
                                <li>Lección 89: Cómo calcular el precio de venta de tus mini donas.</li>
                                <li>Lección 90: Toma en cuenta a la competencia.</li>
                                <li>Lección 91: Precios justos y competitivos.</li>                            
                            </ul> 
                        </div>
                </div> 
                <div className='despleCardQ'>
                            <button onClick={handleShow10}>{isShow10?<i class="fa-solid fa-caret-right fa-rotate-270"></i>:<i class="fa-solid fa-caret-right"></i>}</button>   
                            <span>MÓDULO 11: ELABORA UN CATÁLOGO IRRESISTIBLE</span>                          
                </div>
                <div className={`despleCardContents ${isShow10 ? 'show' : ''}`}>
                        <div className='despleList'>
                            <ul>
                                <li>Lección 92: Cómo hacer un catálogo irresistible.</li>
                                <li>Lección 93: Sugerencias para tomar las fotos.</li>                          
                            </ul> 
                        </div>
                </div> 
                <div className='despleCardQ'>
                            <button onClick={handleShow11}>{isShow11?<i class="fa-solid fa-caret-right fa-rotate-270"></i>:<i class="fa-solid fa-caret-right"></i>}</button>   
                            <span>MÓDULO 12: MARKETING Y PUBLICIDAD</span>                          
                </div>
                <div className={`despleCardContents ${isShow11 ? 'show' : ''}`}>
                        <div className='despleList'>
                            <ul>
                                <li>Lección 94: Estrategias publicitarias.</li>
                                <li>Lección 95: Si otros pueden, tú también puedes</li>
                                <li>Lección 96: Fin de este delicioso viaje</li>                            
                            </ul> 
                        </div>
                </div> 
            </div>           
        </div>
        <div className='bonoContainer'>
            <span className='tittlePink'>¡ No necesitas experiencia previa, nuestro enfoque es 100% amigable para principiantes !</span><hr/>
            <img src={imgpensum} alt="imgpensum" /><hr/>
            <span className='tittlePink'>Ademas te regalo dos bonos especiales que te seran muy utiles si eres principiante...</span>
            <div className='bonoCard'>
                <div className='despleCardQ'>
                            <button onClick={handleShow12}>{isShow12?<i class="fa-solid fa-caret-right fa-rotate-270"></i>:<i class="fa-solid fa-caret-right"></i>}</button>   
                            <span>BONO #1 DE REGALO: Como elegir la mejor maquina para ti.</span>                          
                </div>
                <div className={`despleCardContents ${isShow12 ? 'show' : ''}`}>
                        <div className='despleList'>
                            <ul>
                                <li>Guia para decidir que maquina comprar</li>
                                <li>* Caracteristicas de las maquinas electricas para hacer donitas</li>
                                <li>* Criterios de eleccion</li>
                                <li>* Marcan recomendadas</li>
                                <li>* Mi sugerencia</li>
                                <li>TOTALMENTE GRATIS EL DIA DE HOY</li>
                            </ul> 
                        </div>
                </div> 
                <div className='despleCardQ'>
                            <button onClick={handleShow13}>{isShow13?<i class="fa-solid fa-caret-right fa-rotate-270"></i>:<i class="fa-solid fa-caret-right"></i>}</button>   
                            <span>BONO #2 DE REGALO: Calcula el precio de tus donitas facilmente.</span>                          
                </div>
                <div className={`despleCardContents ${isShow13 ? 'show' : ''}`}>
                        <div className='despleList'>
                            <ul>
                                <li>Plantilla editable en Excel para calcular costos.</li>
                                <li>*Guia en Excel para calcular el precio de venta de tus Mini Donas que podras editar para hacer tus propios calculos.</li>
                                <li>TOTALMENTE GRATIS EL DIA DE HOY</li>                            
                            </ul> 
                        </div>
                </div>
            </div> 
        </div>
    </div>
  )
}
