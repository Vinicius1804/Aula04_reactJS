import styles from "../css/MuralhaChina.module.css";
import ComponentProps from "./ComponentesProps";
import bandeira from "../imagens/china_bandeira.png";
function MuralhaChina() {
    return (
        <div className={styles.fundo}>
            <ComponentProps
                lugar="China"
                texto="A Muralha da China é uma impressionante obra de engenharia, serpenteando por montanhas e vales. Com sua rica história e vistas deslumbrantes, é um destino imperdível para quem deseja mergulhar na cultura chinesa."
                bandeira_pais={bandeira} />
        </div>
    )
}
export default MuralhaChina;