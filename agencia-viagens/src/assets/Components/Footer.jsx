import styles from '../css/Footer.module.css';
import insta from '../imagens/insta.jpg';
import face from '../imagens/Face.jpg';
import tiktok from '../imagens/tiktok.png';
import whats from '../imagens/whats.png';

function Footer() {
    return (
        <footer className={styles.rodape}>
            <h4>Siga-nos em nossas redes sociais</h4>
            <div className={styles.icones}>
                <img src={insta} alt="instagram" />
                <img src={face} alt="facebook" />
                <img src={tiktok} alt="tiktok" />
                <img src={whats} alt="whatsapp" />
            </div>
            <h4>Telefone de contato: (00) 00000-0000</h4>
        </footer>
    )
}
export default Footer;