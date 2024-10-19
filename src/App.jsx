import { useState } from 'react'
import { Nav } from './Nav'
import Header from './Header'
import { PensumSection } from './PensumSection'
import SubHeader from './subHeader'
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
- corregir el alineamiento de background
- la img de metodos de pago no esta nitida



*/
function App() {
  const [count, setCount] = useState(0)

  

  return (
    <>
     <Nav/>
     <Header/>
     <SubHeader/>  
     <PensumSection/>
     <Recipe/>
     <Investment/>
     <PriceSection/>
     <QuestionSection/>
     <VersionSection/>
     <Warranty/>
     <FooterSection/>
     <Testi/>
    </>
  )
}

export default App
