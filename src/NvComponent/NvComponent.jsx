import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { Link } from 'react-router-dom';
import './NvComponent.css'

function NvComponent() {
  return (
    <div>
    <Navbar expand="lg" className="Nv">
      <Container fluid >
        <Navbar.Brand as ={Link} to = '/limpia-tu-espacio/'><img className = 'img-logo'src='https://res.cloudinary.com/da2aauwq2/image/upload/v1710390522/Limpia-tu-espacio/Logo.png'/></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className=" my-4 my-lg-0"
            style={{ maxHeight: '100px',  }}
            
          >
            <Nav.Link as ={Link} to = '/limpia-tu-espacio/'>Inicio</Nav.Link>
            <Nav.Link as ={Link} to = '/limpia-tu-espacio/Nosotros'>Nosotros</Nav.Link>
            <Nav.Link as ={Link} to = '/limpia-tu-espacio/Contactanos'>Contáctanos</Nav.Link>
          </Nav>
          <Link to = {'/limpia-tu-espacio/Contactanos'}>
            <Button variant="outline-success">Mi Espacio</Button>

          </Link>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

export default NvComponent;
