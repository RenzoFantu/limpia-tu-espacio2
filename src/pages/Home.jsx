import React from 'react'
//import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from '../../public/images/3.png';
// import { CarouselItem } from 'react-bootstrap';
import '../pages/home.css'
import Boton from '../Boton/Boton';
import Articles from '../components/articles/Articles';
import { Link } from 'react-router-dom';
import ImgComponents from '../components/ImgComponents';



const Home = () => {
  return (
    <div>

      <div className='Portada'>

        <div className="imgPortada"></div>
        <h1>Limpia tu Espacio...YA!!!</h1>
        <h2>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h2>
        <Link to = {'/limpia-tu-espacio/Contactanos'}>
        <button>Contáctanos</button>

        </Link>
        {/* <div className="content">
        </div> */}
      </div >

      <div className='bienvenida'>

        <h1>¡Bienvenidos a Limpia Tu Espacio!</h1>
        <p>En Limpia Tu Espacio, nos enorgullece ofrecer servicios completos de limpieza y mantenimiento para parcelas de todos los tamaños. Somos un equipo comprometido y dedicado que se especializa en dejar tu terreno impecable, libre de malezas, plantas no deseadas, helechos, árboles no deseados, y mucho más. Con años de experiencia en el campo, estamos aquí para hacer que tu espacio al aire libre luzca su mejor versión.</p>
      </div>
      <div className='contacto'>
        <Boton />
      
        <Articles url1='https://res.cloudinary.com/da2aauwq2/video/upload/v1710391498/Limpia-tu-espacio/mini-escavadora.mov' url2='https://res.cloudinary.com/da2aauwq2/video/upload/v1710391490/Limpia-tu-espacio/escavadora.mov' />

      </div>




    </div>



  )
}


export default Home;
