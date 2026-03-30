import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import styles from "./Home.module.css";

function Home() {
  return (
    <>
      <Header />
      <Container>
        <section className={styles.hero} id="home">
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <p>
                samuel@dev:~$ <span>whoami</span>
              </p>
              <h1>Samuel Olavo</h1>
              <h2>
                <span>&gt;</span> Desenvolvedor Full Stack | Especialista em
                Automação & DevOps
              </h2>
              <p>| Belo Horizonte - MG</p>
              <div className={styles.heroButtons}>
                <button className={styles.primaryButton}>
                  Entre em contato
                </button>
                <a
                  className={styles.secondaryButton}
                  target="_blank"
                  href="https://github.com/samuelolavo"
                  rel="noreferrer"
                >
                  Ver GitHub
                </a>
                <button className={styles.secondaryButton}>Baixar CV</button>
              </div>
            </div>
          </div>
        </section>
        <mark id="sobre" />

        <section className={styles.about}>
          <p>
            samuel@dev:~$ <span> cat about.txt</span>
          </p>
          <h2 className={styles.sectionTitle}>Sobre Mim</h2>
          <div className={styles.aboutContainer}>
            <div className={styles.aboutContent}>
              <p>
                Desenvolvedor Full Stack e Analista de Sistemas com sólida
                experiência em tecnologia. Especialista em Node.js, React e
                Ecossistema Linux/Docker, com forte atuação na arquitetura de
                APIs REST e integração de sistemas ERP em larga escala.
                Expertise em automação de workflows (n8n) e processos fiscais
                (SPED). Focado em transformar desafios técnicos em soluções
                escaláveis que geram impacto direto na eficiência operacional.
              </p>
            </div>
            <div className={styles.aboutContent}>
              <h3 className={styles.formacaoTitle}>
                {"//"} Formação Acadêmica
              </h3>

              <div className={styles.formacao}>
                Pós-Graduação em Desenvolvimento Web Full Stack
                <br />
                <span>PUC Minas </span>
                <br />
                2024
              </div>
              <div className={styles.formacao}>
                Graduação em Gestão da Tecnologia da Informação
                <br />
                <span>UNINTER </span>
                <br />
                2020
              </div>
              <div className={styles.formacao}>
                Extensão em Administração de Sistemas Linux
                <br />
                <span>UFV </span>
                <br />
                2019
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
      </Container>
      <Footer />
    </>
  );
}

export default Home;
