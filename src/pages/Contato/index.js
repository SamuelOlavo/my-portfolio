import { useState } from "react";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import styles from "./Contato.module.css";

function Contato() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    assunto: "",
    mensagem: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = encodeURIComponent(formData.assunto);
    const body = encodeURIComponent(
      `Nome: ${formData.nome}\nEmail: ${formData.email}\n\nMensagem:\n${formData.mensagem}`,
    );

    const mailtoLink = `mailto:samuelobt@gmail.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
  };

  return (
    <>
      <Header />
      <Container>
        <section className={styles.contato} id="contato">
          <p>
            samuel@dev:~$ <span>cat contato.txt</span>
          </p>
          <h2 className={styles.sectionTitle}>Entre em Contato</h2>

          <div className={styles.contatoContainer}>
            <div className={styles.contatoContent}>
              <p>
                Tem um projeto em mente? Quer discutir uma oportunidade de
                colaboração? Ficarei feliz em conversar!
              </p>
              <div className={styles.contatoInfo}>
                <div className={styles.infoItem}>
                  <span className={styles.infoIcon}>📧</span>
                  <span>samuelobt@gmail.com</span>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.infoIcon}>📞</span>
                  <span>31 99310-1769</span>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.infoIcon}>📍</span>
                  <span>Belo Horizonte - MG</span>
                </div>
              </div>
            </div>

            <form className={styles.contatoForm} onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label htmlFor="nome">Nome</label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="assunto">Assunto</label>
                <input
                  type="text"
                  id="assunto"
                  name="assunto"
                  value={formData.assunto}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="mensagem">Mensagem</label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  value={formData.mensagem}
                  onChange={handleChange}
                  rows="5"
                  required
                />
              </div>

              <button type="submit" className={styles.submitButton}>
                Enviar Mensagem
              </button>
            </form>
          </div>
        </section>
      </Container>
      <Footer />
    </>
  );
}

export default Contato;
