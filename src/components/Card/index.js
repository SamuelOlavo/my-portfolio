import styles from "./Card.module.css";

function Card({ videoName, link, title }) {
    return (
        <section className={styles.card}>            
            <a 
                href={link} 
                rel="noreferrer noopener"
                target="_blank">
                <video 
                    autoPlay // Corrigido: camelCase para autoPlay
                    loop                     
                    controls // Adiciona controles de reprodução
                >
                    <source src={`${videoName}`} type="video/webm" /> {/* Corrigido: tipo de vídeo para webm */}
                    <p>Seu navegador não suporta a tag de vídeo. </p> {/* Mensagem alternativa */}
                </video>
                <p>{title}</p>
            </a>
        </section>   
    );
}

export default Card;
