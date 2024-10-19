
import test1 from './assets/test1.jpeg'
import test2 from './assets/test2.jpeg'
import test3 from './assets/test3.jpeg'
import test4 from './assets/test4.jpeg'
import test5 from './assets/test5.jpeg'
import test6 from './assets/test6.jpeg'
import test7 from './assets/test7.jpeg'
import test8 from './assets/test8.jpeg'
import Carousel from 'react-bootstrap/Carousel';

function UncontrolledExample() {
  return (
    <div className='carouselSection'>
        <span className='tittleWhite'>Estos seran tus proximos resultados...</span>
        <span className='tittleWhite'>Mis Alumnos ya lo estan logrando</span>
        <div className='carouselContent'>
          <Carousel >           
            <Carousel.Item >
            <img src={test1} alt="test1" />
              <Carousel.Caption>          
              </Carousel.Caption>
            </Carousel.Item>
            

            <Carousel.Item>
              <img src={test2} alt="test2" />
              <Carousel.Caption>       
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img src={test3} alt="test3" />
              <Carousel.Caption>         
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img src={test4} alt="book" />
              <Carousel.Caption>         
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img src={test5} alt="book" />
              <Carousel.Caption>         
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img src={test6} alt="book" />
              <Carousel.Caption>         
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img src={test7} alt="book" />
              <Carousel.Caption>         
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img src={test8} alt="test" />
              <Carousel.Caption>         
              </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </div>
    </div>
  );
}

export default UncontrolledExample;