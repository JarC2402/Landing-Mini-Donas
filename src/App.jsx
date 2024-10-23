import { useState } from 'react'
import { Nav } from './Nav'
import Header from './Header'
import { PensumSection } from './PensumSection'
import Recipe from './Recipe'
import Investment from './Investment'
import PriceSection from './PriceSection'
import QuestionSection from './QuestionSection'
import VersionSection from './VersionSection'
import Warranty from './Warranty'
import Testi from './Testi'
import SubHeader2 from './SubHeader2'

// https://hotm.art/EmprendeconMinidonasOferta


/* Tareas por corregir:
- 



*/
function App() {
  const [count, setCount] = useState(0)

  

  return (
    <>
     <Nav/>
     <Header/>
     <SubHeader2/> 
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
