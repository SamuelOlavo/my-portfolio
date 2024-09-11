import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home/index"
import Serv from "./pages/Servicos/index";
import Curri from "./pages/Curriculo";


function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Home /> }></Route>      
                <Route path="/serv" element={ <Serv /> }></Route> 
                <Route path="/curriculo" element={ <Curri /> }></Route>                      
            </Routes>
        </BrowserRouter>

    )
}

export default AppRoutes;