import styles from './baseboard.module.css'
import {MdOutlineWatchLater} from 'react-icons/md'
import {AiOutlinePhone} from 'react-icons/ai'
import {GoLocation} from 'react-icons/go'
import {HiOutlineMail} from 'react-icons/hi'
import {BsInstagram} from 'react-icons/bs'
import {FaWhatsapp} from 'react-icons/fa'

function Baseboard(){
    return(
        <footer>
            
            <div className={styles.containersFooter}><br/><br/>
                <strong>Horarios de funcionamento</strong><br/><br/>
                <p><MdOutlineWatchLater/> Seg a Qui: 11h às 15h | 18h às 23h</p>
                <p><MdOutlineWatchLater/> Sexta: 11h às 15h | 18h às 00h</p>
                <p><MdOutlineWatchLater/> Sábado: 11h às 16h | 18h às 00h</p>
                <p><MdOutlineWatchLater/> Domingo: 11h às 16h | 18h às 23h</p>
            </div>
            <div className={styles.containersFooter}>
            <br/><br/>
                <strong>
                Contato
                </strong> <br/><br/>
                <p><FaWhatsapp/> 15 90000-0000(Whatsapp)</p>
                <p><AiOutlinePhone/> 15 3000-0000(Telefone)</p>
                <p><GoLocation/> Av. Paulista, 349, Bairro Jd Cecilha</p>
                <p><BsInstagram/> @instagram</p>
                <p><HiOutlineMail/> emailboi@hotmail.com</p>
            </div>
        </footer>
    )
        
}
export default Baseboard;