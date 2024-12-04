import Logo from '../imagens/viagens.jpg';
import Lupa from '../imagens/lupa.png';
import styles from '../css/Header.module.css';

//vamos importar o link do router dom
import { Link } from 'react-router-dom';
function Header() {
    return (

        <header className={styles.content}>
            <Link to='/'>
                <img className={styles.logo} src={Logo} alt="logo" />
            </Link>

            <nav className={styles.menu}>
                <ul className={styles.container_links}>

                    <li>
                        <Link className={styles.links} to='/'>Home</Link>
                    </li>
                    <li>
                        <Link className={styles.links} to='Escocia'>Escócia</Link>
                    </li>
                    <li>
                        <Link className={styles.links} to='GrandCanyon'>GrandCanyon</Link>
                    </li>
                    <li>
                        <Link className={styles.links} to='MuralhaChina'>Muralhas da China</Link>
                    </li>
                    <li>
                        <Link className={styles.links} to='Aruba'>Aruba </Link>
                    </li>


                </ul>
            </nav>
            <div>
                <input className={styles.login} type="search" />
            </div>
            <img className={styles.lupa} src={Lupa} alt="Lupa" />
        </header>

    )
}
export default Header;