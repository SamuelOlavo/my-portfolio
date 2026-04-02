import { useState } from "react";

import { HashLink } from "react-router-hash-link";
import styles from "./Header.module.css";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className={styles.header}>
      <div>
        {" "}
        <span>$</span>samuel.dev
      </div>

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

        <HashLink smooth to="/#skills" onClick={closeMenu}>
          {"// Skills "}
        </HashLink>

        <HashLink smooth to="/projetos/#projects" onClick={closeMenu}>
          {"// Projetos "}
        </HashLink>

        <HashLink smooth to="/contato/#contato" onClick={closeMenu}>
          {"// Contato "}
        </HashLink>
      </nav>
    </header>
  );
}

export default Header;
