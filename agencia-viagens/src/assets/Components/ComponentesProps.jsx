import styles from "../css/ComponentesProps.module.css";

/*Parâmetro para o nome do país, um texto e a bandeira de um país
Vamos trabalhar com parâmetros*/

function ComponentProps({ lugar, texto, bandeira_pais }) {
    return (
        <div className={styles.corpo_props}>
            <h2>Venha conhecer esse lugar incrível: {lugar} !</h2>
            <p className={styles.paragrafo}>{texto}</p>
            <img className={styles.bandeira} src={bandeira_pais} alt="" />


        </div>
    )
}
export default ComponentProps;