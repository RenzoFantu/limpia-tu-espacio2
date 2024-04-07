import React, { createElement, useState } from 'react'
import { Button } from 'react-bootstrap'
import './ImgComponents.css'



const ImgComponents = () => {
  const randomImgs = [
      {
          id:1,
          url: 'https://res.cloudinary.com/da2aauwq2/image/upload/v1712105158/Limpia-tu-espacio/c1nzae39xeq3dh3tvml6.png'
      },
      {
          id:2,
          url: 'https://res.cloudinary.com/da2aauwq2/image/upload/v1712105158/Limpia-tu-espacio/oqjsivpi2rprqvzqkfkb.png'
      },
      {
          id:3,
          url: 'https://res.cloudinary.com/da2aauwq2/image/upload/v1712105156/Limpia-tu-espacio/tbfuksmcvj20dpms0kba.png'
      },
      {
        id:3,
        url: 'https://res.cloudinary.com/da2aauwq2/image/upload/v1712105150/Limpia-tu-espacio/tda7vaiazwxf3eba7p1v.png'
    }
  ]
    const [foto, setFoto] = useState(randomImgs[0].url)
    
    const change = () =>{
        const buscar = Math.floor(Math.random() * randomImgs.length)
        const mostrar = randomImgs[buscar];
        setFoto(mostrar.url)
        
    }

    
   
  return (
    
    <div  className='img-random'>
     <div>

      <img 
      src={foto} 
      alt={`random image`} 
      style={{ maxWidth: '100%', height: 'auto' }}
      />
     </div>
      <div className="btv">

      <Button onClick={change}>Ver trabajos Random</Button>
      </div>
      
      
    </div>
  )
}

export default ImgComponents