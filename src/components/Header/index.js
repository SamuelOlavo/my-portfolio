import { useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import styles from "./Header.module.css";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className={styles.header}>
      {/* Link comum para a Home */}
      <Link to="/" onClick={closeMenu}>
        <div> $samuel.olavo</div>
      </Link>

      <button className={styles.mobileMenuButton} onClick={toggleMenu}>
        {isMenuOpen ? "✕" : "☰"}
      </button>

      <nav className={isMenuOpen ? styles.open : ""}>
        <HashLink smooth to="/#home" onClick={closeMenu}>
          {"// Home"}
        </HashLink>

        <HashLink smooth to="/#sobre" onClick={closeMenu}>
          {"// Sobre"}
        </HashLink>

        <Link to="/curriculo" onClick={closeMenu}>
          {" "}
          {"// Currículo"}{" "}
        </Link>
        <Link to="/serv" onClick={closeMenu}>
          {" "}
          {"// Projetos"}{" "}
        </Link>
        <Link to="/contato" onClick={closeMenu}>
          {" "}
          {"// Contato"}{" "}
        </Link>
      </nav>
    </header>
  );
}

export default Header;
