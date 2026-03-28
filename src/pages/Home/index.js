import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import styles from "./Home.module.css";

function Home() {
  return (
    <>
      <Header />
      <Container>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
               <p>
               samuel@dev:~$ whoami

              </p>
              <h1>Samuel Olavo</h1>
              <h2>
                > Desenvolvedor Full Stack | Especialista em Automação & DevOps
              </h2>
              <p>
               | Belo Horizonte - MG
              </p>
              <div className={styles.heroButtons}>
                <button className={styles.primaryButton}>
                  Entre em contato
                </button>
                <button className={styles.secondaryButton}>Ver GitHub</button>
                <button className={styles.secondaryButton}>Baixar CV</button>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.skills}>
          <h2 className={styles.sectionTitle}>Habilidades</h2>
          <div className={styles.skillsGrid}>
            <div className={styles.skillCard}>
              <div className={styles.skillIcon}>⚛️</div>
              <h3>Frontend</h3>
              <p>React, Angular, Vue.js, HTML5, CSS3, JavaScript ES6+</p>
            </div>

            <div className={styles.skillCard}>
              <div className={styles.skillIcon}>⚙️</div>
              <h3>Backend</h3>
              <p>Node.js, Express, APIs REST, MySQL, MongoDB, PostgreSQL</p>
            </div>

            <div className={styles.skillCard}>
              <div className={styles.skillIcon}>🐳</div>
              <h3>DevOps</h3>
              <p>Docker, Linux, CI/CD, AWS, Infraestrutura em nuvem</p>
            </div>

            <div className={styles.skillCard}>
              <div className={styles.skillIcon}>🎨</div>
              <h3>Design</h3>
              <p>
                UI/UX Design, Bootstrap, Tailwind CSS, Figma, Responsividade
              </p>
            </div>
          </div>
        </section>

        <section className={styles.about}>
          <h2 className={styles.sectionTitle} id="sobre">Sobre Mim</h2>
          <div className={styles.aboutContent}>
            <p>
              Sou cristão, pai de família, casado com Andreza que desta união
              nasceu meu querido filho. Gosto de futebol, filmes, séries e me
              sinto um cinefilo apaixonado. Sou praticante de corrida de rua e
              de trilha, possuindo 18km como melhor marca de trilha e 6km de
              corrida de rua.
            </p>
            <p>
              Prefiro a tranquilidade de um sitio a uma festa agitada, o som dos
              passaros, a água de uma cachoeira, um cafezinho. Sou adepto ao
              simples e àquilo que é necessário para viver bem, sem luxos.
            </p>
            <blockquote className={styles.quote}>
              "O importante é ter constância."
            </blockquote>
          </div>
        </section>
      </Container>
      <Footer />
    </>
  );
}

export default Home;
