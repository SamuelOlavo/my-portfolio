import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import styles from "./Proj.module.css";
import stylesHome from "../Home/Home.module.css";

function Projetos() {
  const projects = [
    {
      id: 1,
      language: "Python",
      languageColor: "#3572A5",
      name: "ConsultaCNPJ",
      description:
        "Script Python para automação de enriquecimento de dados cadastrais via BrasilAPI. Armazena dados de empresas consultadas na Receita Federal de forma automatizada.",
      tags: ["python", "data-analysis", "integration", "pandas"],
      moreTags: 2,
      updated: "Updated 3 days ago",
      stars: 5,
      githubUrl: "https://github.com/SamuelOlavo/ConsultaCNPJ",
    },
    {
      id: 2,
      language: "Python",
      languageColor: "#3572A5",
      name: "ML Hunter Trend",
      description:
        "Sistema automatizado para identificar produtos em alta e oportunidades de negócio no Mercado Livre. Utiliza web scraping e automação com n8n para análise de tendências em tempo real.",
      tags: ["automation", "n8n-workflow", "automacao-web", "integration"],
      moreTags: 3,
      updated: "Updated Jan 15, 2025",
      stars: 2,
      githubUrl: "https://github.com/SamuelOlavo/MlHunterTrend",
    },
    {
      id: 3,
      language: "JavaScript",
      languageColor: "#F1E05A",
      name: "API-SIAND / AgendaAPI",
      description:
        "Plataforma Full Stack (Node.js/React) para gestão de clínicas com agendamento automatizado. Sistema integrado que permite cadastro de serviços, gerenciamento inteligente de agendamentos e perfis de usuários.",
      tags: ["nodejs", "mongodb", "expressjss", "dashboard"],
      moreTags: 1,
      updated: "Updated 2 weeks ago",
      stars: 3,
      githubUrl: "https://github.com/SamuelOlavo/API-SIAND",
    },
    {
      id: 4,
      language: "CSS",
      languageColor: "#563D7C",
      name: "Instagram Clone",
      description:
        "Clone da página inicial do Instagram com foco em design responsivo e componentização.",
      tags: ["css", "design-system", "components"],
      moreTags: 4,
      updated: "Updated 1 month ago",
      stars: 2,
      githubUrl: "https://github.com/SamuelOlavo/Instagram",
    },
    {
      id: 5,
      language: "JavaScript",
      languageColor: "#F1E05A",
      name: "my-portfolio",
      description:
        "Projeto React com roteamento contendo 3 páginas principais: Home, Serviços e Currículo.",
      tags: ["react", "javascript", "frontend", "portfolio", "responsive"],
      moreTags: 2,
      updated: "Updated 4 days ago",
      stars: 1,
      githubUrl: "https://github.com/SamuelOlavo/my-portfolio",
    },
    {
      id: 6,
      language: "JavaScript",
      languageColor: "#F1E05A",
      name: "netflix-clone",
      description:
        "Site clone da Netflix construído no curso da Digital Innovation One.",
      tags: ["javascript", "jquery", "html", "css"],
      moreTags: 3,
      updated: "Updated 1 week ago",
      stars: 4,
      githubUrl: "https://github.com/SamuelOlavo/netflix-clone",
    },
    {
      id: 7,
      language: "HTML",
      languageColor: "#f19e5a",
      name: "SIAND",
      description:
        "Página web de uma clínica de estética, com controle do formulário dentro da plataforma AgendaAPI",
      tags: ["javascript", "jquery", "html", "css"],
      moreTags: 3,
      updated: "Updated 1 week ago",
      stars: 4,
      githubUrl: "https://github.com/SamuelOlavo/SIAND",
    },
  ];

  return (
    <>
      <Header />
      <Container>
        <section className={styles.projectsSection} id="projects">
          <p>
            samuel@dev:~$ <span> git log --all</span>
          </p>
          <div className={styles.projectsHeader}>
            <h1 className={stylesHome.sectionTitle}>Projetos em Destaque</h1>
            <h4 className={styles.projectsSubtitle}>
              Confira alguns dos meus projetos mais relevantes
            </h4>
          </div>

          <div className={styles.projectsGrid}>
            {projects.map((project) => (
              <div key={project.id} className={styles.projectCard}>
                <div className={styles.projectHeader}>
                  <div className={styles.languageInfo}>
                    <span
                      className={styles.languageDot}
                      style={{ backgroundColor: project.languageColor }}
                    ></span>
                    <span className={styles.languageName}>
                      {project.language}
                    </span>
                  </div>
                  <div className={styles.projectActions}>
                    <span className={styles.starCount}>☆ {project.stars}</span>
                    <a
                      href={project.githubUrl}
                      className={styles.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        className={styles.githubIcon}
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </a>
                  </div>
                </div>

                <h3 className={styles.projectName}>{project.name}</h3>
                <p className={styles.projectDescription}>
                  {project.description}
                </p>

                <div className={styles.projectTags}>
                  {project.tags.map((tag, index) => (
                    <span key={index} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                  {project.moreTags > 0 && (
                    <span className={styles.moreTags}>+{project.moreTags}</span>
                  )}
                </div>

                <div className={styles.projectFooter}>
                  <span className={styles.updateDate}>{project.updated}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </Container>
      <Footer />
    </>
  );
}

export default Projetos;
