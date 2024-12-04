import styles from "../css/Aruba.module.css";
import ComponentProps from "./ComponentesProps";
import bandeira from "../imagens/aruba_bandeira.png";
function Aruba() {
    return (
        <div className={styles.fundo}>
            <ComponentProps
                lugar="Aruba"
                texto="Aruba é um paraíso caribenho conhecido por suas praias de areia branca e águas cristalinas. Com um clima ensolarado o ano todo, é o destino perfeito para relaxar e explorar a cultura vibrante da ilha."
                bandeira_pais={bandeira} />
        </div>
    )
}
export default Aruba;