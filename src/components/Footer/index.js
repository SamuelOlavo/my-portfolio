import React from 'react';
import styles from './Footer.module.css';

// Importe as imagens
import linkedin from './linkedin.png'; 
import git from './git.png';
import insta from './insta.png';


function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.img_redes}> {/* Aplique a classe do CSS Modules aqui */}
                <p>
                    <a href="https://www.linkedin.com/in/samuel-olavo-teixeira-8056747a" target="_blank" rel="noopener noreferrer"> 
                        <img src={linkedin} alt="LinkedIn" className={styles.redes} /> 
                    </a>
                </p>
                <p>
                    <a href="https://github.com/SamuelOlavo" target="_blank" rel="noopener noreferrer"> 
                        <img src={git} alt="GitHub" className={styles.redes} height="50px" /> 
                    </a>
                </p>
                <p>
                    <a href="https://www.instagram.com/samuel_olavo/" target="_blank" rel="noopener noreferrer"> 
                        <img src={insta} alt="Instagram" className={styles.redes} /> 
                    </a>
                </p>
            </div>   
            <h2> © Desenvolvido  por Samuel Olavo</h2>
        </footer>
    );
}

export default Footer;