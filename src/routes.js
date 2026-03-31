import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/index";
import Serv from "./pages/Servicos/index";
import Curri from "./pages/Curriculo/index";
import Projetos from "./pages/Projetos/index";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/serv" element={<Serv />}></Route>
        <Route path="/curriculo" element={<Curri />}></Route>
        <Route path="/projetos" element={<Projetos />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
