import React, { useState } from "react";
import styles from "./Secao.module.css";
import curriculo from "../../json/curriculo.json";

function Secao() {
  const [activeSections, setActiveSections] = useState({});

  const toggleAccordion = (index) => {
    setActiveSections((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const renderizarInformacoesPessoais = () => {
    return (
      <div className={styles.box}>
        <h2>{curriculo.informacoesPessoais.nome} {curriculo.informacoesPessoais.sobrenome}</h2>
        <p>{curriculo.informacoesPessoais.email} - {curriculo.informacoesPessoais.telefone}</p>
        <p>{curriculo.informacoesPessoais.endereco}</p>
        <p>{curriculo.informacoesPessoais.cidade} - {curriculo.informacoesPessoais.estado} {curriculo.informacoesPessoais.cep}</p>
         {curriculo.informacoesPessoais.site && <p><a href={curriculo.informacoesPessoais.site} target="_blank" rel="noopener noreferrer">{curriculo.informacoesPessoais.site}</a></p>}
      </div>
    );
  };

  const renderizarSecao = (titulo, conteudo, index) => {
    const isActive = activeSections[index];
    return (
      <div className={styles.box}>
         <div className={styles.tituloContainer}>
          <h2 onClick={() => toggleAccordion(index)}>{titulo}</h2>
          <button onClick={() => toggleAccordion(index)}>{isActive ? '-' : '+'}</button>
        </div>
        {isActive && (
          <article>
            {Array.isArray(conteudo) ? (
              conteudo.map((item, idx) => (
                < article key={idx}>
                  <h3>{item.empresa || item.instituicao || item.nome}</h3>
                  {item.cargo && <p>Cargo: {item.cargo}</p>}
                  {item.curso && <p>Curso: {item.curso}</p>}
                  {item.periodo && <p>Período: {item.periodo}</p>}
                  {item.descricao && <p>{item.descricao}</p>}
                  {item.link && <p><a href={item.link} target="_blank" rel="noopener noreferrer">{item.link}</a></p>}
                </article >
              ))
            ) : (
              <p>{conteudo}</p>
            )}
          </article>
        )}
      </div>
    );
  };

  return (
    <section className={styles.secao}>
      {renderizarInformacoesPessoais()}
      {renderizarSecao("Objetivo", curriculo.objetivo, 0)}
      {renderizarSecao("Competências", curriculo.competencias, 1)}
      {renderizarSecao("Formação", curriculo.formacao, 2)}
      {renderizarSecao("Experiência", curriculo.experiencia, 3)}
      {renderizarSecao("Projetos", curriculo.projetos, 4)}
    </section>
  );
}

export default Secao;




