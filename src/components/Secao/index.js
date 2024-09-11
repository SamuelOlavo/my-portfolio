import styles from "./Secao.module.css";
import curriculo from "../../json/curriculo.json";

function Secao() {
  const renderizarInformacoesPessoais = () => {
    return (
      <div>
        <h2>{curriculo.informacoesPessoais.nome} {curriculo.informacoesPessoais.sobrenome}</h2>
        <p>{curriculo.informacoesPessoais.endereco}</p>
        <p>{curriculo.informacoesPessoais.cidade} - {curriculo.informacoesPessoais.estado}, {curriculo.informacoesPessoais.cep}</p>
        <p>{curriculo.informacoesPessoais.email} - {curriculo.informacoesPessoais.telefone}</p>
        {curriculo.informacoesPessoais.site && <p><a href={curriculo.informacoesPessoais.site} target="_blank" rel="noopener noreferrer">{curriculo.informacoesPessoais.site}</a></p>}
      </div>
    );
  };

  const renderizarSecao = (titulo, conteudo) => {
    if (Array.isArray(conteudo)) {
      return (
        <div>
          <h2>{titulo}</h2>
          
            {conteudo.map((item, index) => (
              <article key={index}>
                <h3>{item.empresa || item.instituicao || item.nome}</h3>
                {item.cargo && <p>Cargo: {item.cargo}</p>}
                {item.curso && <p>Curso: {item.curso}</p>}                
                {item.periodo && <p>Período: {item.periodo}</p>}             
                {item.descricao && <p>{item.descricao}</p>}
                {item.link && <p><a href={item.link} target="_blank" rel="noopener noreferrer">{item.link}</a></p>}
              </article>
            ))}
          
        </div>
      );
    } else {
      return (
        <div>
          <h2>{titulo}</h2>
          <p>{conteudo}</p>
        </div>
      );
    }
  };

  return (
    <section className={styles.secao}>
      {renderizarInformacoesPessoais()}
      {renderizarSecao("Objetivo", curriculo.objetivo)}
      {renderizarSecao("Competências", curriculo.competencias)}
      {renderizarSecao("Formação Academica", curriculo.formacao)}
      {renderizarSecao("Experiência Profissional", curriculo.experiencia)}
      {renderizarSecao("Projetos", curriculo.projetos)}
    </section>
  );
}

export default Secao;