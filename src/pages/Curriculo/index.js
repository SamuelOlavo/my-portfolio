import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Secao from "../../components/Secao";
import styles from "./Curri.module.css"

function Curri() {
    return (
        <>
        <Header />
        <Container>
            <h1>Curriculo</h1>
        <section className={styles.curri}>           
                <Secao/>           
        </section>
        </Container>
        <Footer />
        </>
        
    );
}

export default Curri;