import './Contactanos.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faSquareInstagram, faSquareWhatsapp} from '@fortawesome/free-brands-svg-icons'


const Contactanos = () => {
    return (
        <div>
            <div className="container-div-contacto">
                <div className="box-info">
                    <h1>CONTÁCTATE CON NOSOTROS</h1>
                    <div className="data">
                        <p><i className="fa-solid fa-phone"></i> +56 9 9xxxxxx</p>
                        <p><i className="fa-solid fa-envelope"></i> contacto@limpiatuespacio.cl</p>
                        <p><i className="fa-solid fa-location-dot"></i> Puerto Vararas - Frutillar - Puerto Montt</p>
                    </div>
                    <div className="links">
                        <a href='#'><FontAwesomeIcon icon={faFacebook} /></a>
                        <a href="#"><FontAwesomeIcon icon={faSquareInstagram} /></a>
                        <a href="#"><FontAwesomeIcon icon={faSquareWhatsapp} /></a>
                    </div>
                </div>
                <form>
                    <div className="input-box">
                        <input type="text" required placeholder="Nombre y Apellido" />
                    </div>
                    <div className="input-box">
                        <input type="email" required placeholder="Correo Electrónico" />
                    </div>
                    <div className="input-box">
                        <input type="text" required placeholder="Asunto" />
                    </div>
                    <div className="input-box">
                        <textarea cols="30" rows="10" placeholder="Escribenos"></textarea>
                    </div>
                    <button type="submit">Enviar Mensaje</button>
                </form>
            </div>
        </div>
    )
}

export default Contactanos
