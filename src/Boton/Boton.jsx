import React from 'react'
import Button from 'react-bootstrap/Button';
import './boton.css'
import { Link } from 'react-router-dom';

const Boton = () => {
  return (
    <div className='but'>
      <Link to ={'/Contactanos'}>
        <Button className='Boton' variant="primary">Contáctanos</Button>{' '}
      </Link>
    </div>
  )
}

export default Boton
