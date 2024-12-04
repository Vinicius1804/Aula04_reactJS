import styles from '../css/Home.module.css';


function Home() {
    return (

        <section className={styles.corpo_home}>
            <div className={styles.imagem_lado}></div>

            <div className={styles.texto_lado}>
                <h1>Encontre aqui a viagem dos seus sonhos!</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis tempore consequuntur dolore quae iusto cumque ducimus dolorum reiciendis. Ducimus quaerat corrupti placeat? Eos consequatur, inventore debitis sequi facilis unde natus dicta vero fuga voluptatibus voluptas quo repudiandae.</p>
            </div>

        </section>

    )
}
export default Home;