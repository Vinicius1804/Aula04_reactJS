import styles from "../css/Escocia.module.css";
import ComponentProps from "./ComponentesProps";
import bandeira from "../imagens/escocia_bandeira.png";

function Escocia() {
    return (
        <div className={styles.fundo}>
            <ComponentProps
                lugar="Escócia"
                texto="A Escócia encanta com suas paisagens deslumbrantes, castelos históricos e a rica tradição do uísque. Explore a vibrante cultura de cidades como Edimburgo e Glasgow e descubra um destino inesquecível."
                bandeira_pais={bandeira} />
        </div>
    )
}
export default Escocia;