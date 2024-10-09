/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from "react-router-dom";
import styles from "./Header.module.css"

function Header() {
    return(
        <header className={styles.header}>
            <Link to="/">
            <div> </div>
            </Link>
            <nav>                
                {/* <a href="#">Contato</a> */}
                <Link to="/curriculo">Curriculo</Link>               
                <Link to="/">Sobre</Link>
                <Link to="/serv">Seviços</Link>
            </nav>
        </header>
    )

}
export default Header;