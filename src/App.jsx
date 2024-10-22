import { useState } from 'react'
import { Nav } from './Nav'
import Header from './Header'
import { PensumSection } from './PensumSection'
import SubHeader from './SubHeader'
import Recipe from './Recipe'
import Investment from './investment'
import PriceSection from './PriceSection'
import QuestionSection from './QuestionSection'
import VersionSection from './VersionSection'
import Warranty from './Warranty'
import FooterSection from './FooterSection'
import Testi from './Testi'

// https://hotm.art/EmprendeconMinidonasOferta


/* Tareas por corregir:
- textos  de recetario, contenido del curso vintinto del pesum
- Header 2 los puntos de si te gustaria mas oscuros



*/
function App() {
  const [count, setCount] = useState(0)

  

  return (
    <>
     <Nav/>
     <Header/>
     <SubHeader />  
     <PensumSection/>
     <Recipe/>
     <Investment/>
     <PriceSection/>
     <QuestionSection/>
     <VersionSection/>
     <Warranty/>
     <Testi/>
    </>
  )
}

export default App
