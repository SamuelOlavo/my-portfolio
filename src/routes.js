import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home/index"
import Serv from "./pages/Servicos/index";


function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Home /> }></Route>      
                <Route path="/serv" element={ <Serv /> }></Route>                       
            </Routes>
        </BrowserRouter>

    )
}

export default AppRoutes;