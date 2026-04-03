import { HashLink } from "react-router-hash-link";
import styles from "./Footer.module.css";

// Importe as imagens
import linkedin from "./linkedin.png";
import git from "./git.png";
import insta from "./insta.png";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_content}>
        {/* Seção samuel.dev */}
        <div className={styles.footer_section}>
          <h3 className={styles.footer_title}>
            <span>$</span> samuel.dev
          </h3>
          <p className={styles.footer_description}>
            Desenvolvedor Full Stack apaixonado por criar soluções inovadoras e
            experiências digitais excepcionais.
          </p>
        </div>

        {/* Seção Links Rápidos */}
        <div className={styles.footer_section}>
          <h3 className={styles.footer_title}>Links Rápidos</h3>
          <nav className={styles.nav}>
            <HashLink smooth to="/#home">
              {"// Home"}
            </HashLink>
            <HashLink smooth to="/#sobre">
              {"// Sobre"}
            </HashLink>

            <HashLink smooth to="/#skills">
              {"// Skills "}
            </HashLink>

            <HashLink smooth to="/projetos/#projects">
              {"// Projetos "}
            </HashLink>

            <HashLink smooth to="/contato/#contato">
              {"// Contato "}
            </HashLink>
          </nav>
        </div>

        {/* Seção Conecte-se */}
        <div className={styles.footer_section}>
          <h3 className={styles.footer_title}>Conecte-se</h3>
          <div className={styles.contact_info}>
            <p className={styles.contact_item}>
              <a
                href="mailto:samuel.obt@gmail.com"
                className={styles.contact_link}
              >
                samuel.obt@gmail.com
              </a>
            </p>
            <p className={styles.contact_item}>
              <a href="tel:+5531993101769" className={styles.contact_link}>
                +55 31 99310-1769
              </a>
            </p>
          </div>
          <div className={styles.img_redes}>
            <a
              href="https://www.linkedin.com/in/samuel-olavo-teixeira-8056747a"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.social_link}
            >
              <img src={linkedin} alt="LinkedIn" className={styles.redes} />
            </a>
            <a
              href="https://github.com/SamuelOlavo"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.social_link}
            >
              <img
                src={git}
                alt="GitHub"
                className={styles.redes}
                height="50px"
              />
            </a>
            <a
              href="https://www.instagram.com/samuel_olavo/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.social_link}
            >
              <img src={insta} alt="Instagram" className={styles.redes} />
            </a>
          </div>
        </div>
      </div>

      <div className={styles.footer_bottom}>
        <h2> © Desenvolvido por Samuel Olavo</h2>
      </div>
    </footer>
  );
}

export default Footer;
