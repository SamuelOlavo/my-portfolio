/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <Link to="/" onClick={closeMenu}>
        <div> $samuel.olavo</div>
      </Link>

      <button
        className={styles.mobileMenuButton}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        {isMenuOpen ? "✕" : "☰"}
      </button>

      <nav className={isMenuOpen ? styles.open : ""}>
        <Link to="/" onClick={closeMenu}>
          <span>//</span> Home
        </Link>
        <Link to="/index.html" onClick={closeMenu}>
          <span>//</span> Sobre
        </Link>
        <Link to="/curriculo" onClick={closeMenu}>
          <span>//</span> Currículo
        </Link>
        <Link to="/serv" onClick={closeMenu}>
          <span>//</span> Projetos
        </Link>
        <Link to="/contato" onClick={closeMenu}>
          <span>//</span> Contato
        </Link>
      </nav>
    </header>
  );
}

export default Header;
