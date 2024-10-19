import React from 'react'
import recipe1 from './assets/recipe1.png'
import recipe2 from './assets/recipe2.png'
import recipe3 from './assets/recipe3.png'

const Recipe = () => {
  return (
    <>
    <div className='recipexContent'>
        <div className='titleContent'><span className='subTitleRed'>Y para empezar desde ya tu emprendimiento, hemos incluido tres fabulosos recetarios, todos ellos originales de la autora Lucy Robles, que te encantaran.</span></div>
        <div className='recipexCardContent'>            
                <div className='recipexCard'>
                    <img src={recipe1} alt="recipe1" />
                    <span className='text1'>Enprende con pasion y creatividad con estas recetas que te inspiraran  a ofrecer Paletas de Pay irresistibles. Aqui encontraras todo lo que necesitas, desde la elaboracion de 
                        difirentes tipos de masa, hasta los mas deliciosos y variados rellenos como zarzamora  con chocolate, Piña colada y Nuez con ron...
                    </span>
                </div>   
                <div className='recipexCard'>
                        <img src={recipe2} alt="recipe2" />
                        <span className='text1'>Descubre las bases y secretos para crear postres en vaso. No solo sera una experiencia culinaria, sino tambien una oportunidad para cautivar a tus clientes con presentaciones creativas y unicas. 
                            Contiene 30 recetas exquisitas para complementar tu emprendimiento repostero...
                        </span>
                </div>                
                <div className='recipexCard'>
                        <img src={recipe3} alt="recipe3" />
                        <span className='text1'>Y no pueden faltar las berlinesas  en tu empredimiento de mini donas. Incluye las recetas basicas para preparar  la masa ideal de berlinesas. Ademas, descubriras 10 irrestistibles sabores de rellenos 
                            que van desde el cautivante Moka hasta el suave Rompope, Coco, Queso con Zarzamora, Frutos rojos y mas...
                        </span>
                </div>                
        </div>
    </div>
    </>
  )
}

export default Recipe