import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import styles from "./Home.module.css"

function Home() {
    return (
        <>
        <Header />
        <Container>
            <h1>Sobre</h1>
        <section className={styles.home}>
            <div>
<p>Seja bem-vindo à minha página web, aqui quero partilhar um pouco da minha trajetória profissional e história de vida.</p> 
<p>Sou um desenvolvedor web full-stack com experiência em análise de sistemas, busco aprimorar minhas habilidades no desenvolvimento de aplicações web de alta escalabilidade. Possuo domínio em HTML, CSS, JavaScript, Node.js, React, além de experiência com bancos de dados MySQL e MongoDB. Atuo como Analista de Implantação na Nerus, implementando soluções ao ERPs, prestando consultoria e gerenciando incidentes. Sou graduado em Gestão da Tecnologia da Informação e pós-graduando em Desenvolvimento Web Full Stack. Tenho projetos que demonstram expertise em desenvolvimento front-end e back-end, utilizando APIs REST e princípios de UX Design. Busco contribuir para projetos web inovadores, com foco em acessibilidade e design responsivo</p>
<p>Sou Cristão, pai de família, casado com Andreza que desta união nasceu meu querido filho. Gosto de futebol, filmes, séries e me considero um cinéfilo apaixonado. Sou praticante de corrida de rua e de trilha, possuindo 18km como melhor marca de trilha e 6km de corrida. Prefiro a tranquilidade de um sítio a uma festa agitada, o som dos pássaros, a água de uma cachoeira, um cafezinho. Sou adepto ao simples e àquilo que é necessário para viver bem, sem luxos.</p>
<p>Abracei cada oportunidade de aprendizado. Aperfeiçoei minhas habilidades como Helpdesk e me aprofundei em Linux, MySQL e Docker como Analista de Implantação na Nerus, contribuindo para a otimização do sistema ERP da empresa.</p>
<p>Buscando fortalecer meus conhecimentos, me formei em Gestão da Tecnologia da Informação e me especializei em Desenvolvimento Web Full Stack. Atualmente, domino as áreas de gerenciamento de infraestrutura de TI, desenvolvimento web (HTML, CSS, JavaScript), frameworks (React, Angular, Bootstrap e jQuery), além de banco de dados, segurança da informação e usabilidade.</p>
<p>Minha paixão por tecnologia se traduz em uma busca constante por aprimoramento, garantindo que eu entregue soluções inovadoras e eficazes para os desafios do dia a dia. Acredito no poder da constância para alcançar o sucesso e estou sempre pronto para novos desafios.</p>
<p><i>“O importante é ter constância.”</i></p>
</div>
        </section>
        </Container>
        <Footer />
        </>
        
    );
}

export default Home;