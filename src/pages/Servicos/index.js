import Card from "../../components/Card";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Videos from "../../../src/json/db.json";


function Serv() {
  return (
    <>
      <Header />
      <Container>
        <h1> Servicos</h1>
        <section className="cards"> 
        {Videos.map((video) => ( 
            <Card videoName={video.videoName} link={video.link} title={video.title} key={video.id} />
          ))}
        </section>
      </Container>
      <Footer />
    </>
  );
}

export default Serv;
