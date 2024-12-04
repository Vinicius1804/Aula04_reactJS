import styles from "../css/GrandCanyon.module.css";
import ComponentProps from "./ComponentesProps";
import bandeira from "../imagens/eua_bandeira.png";
function GrandCanyon() {
    return (
        <div className={styles.fundo}>
            <ComponentProps
                lugar="Grand Canyon"
                texto="O Grand Canyon é uma maravilha natural, famosa por suas paisagens impressionantes e formações rochosas. Explore trilhas e mirantes para vivenciar sua beleza única."
                bandeira_pais={bandeira} />
        </div>
    )
}
export default GrandCanyon;