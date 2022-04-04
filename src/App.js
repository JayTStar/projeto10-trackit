import TelaInicio from "./Componentes/TelaInicio"
import TelaCadastro from "./Componentes/TelaCadastro"
import TelaHabitos from "./Componentes/TelaHabitos"
import TelaHoje from "./Componentes/TelaHoje"
import TelaHistorico from "./Componentes/TelaHistorico"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import DadosUsuario from "./Componentes/Context"
import './progressbar.css'

export default function App(){

    return(
        <DadosUsuario>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<TelaInicio />} />
                    <Route path="/cadastro" element={<TelaCadastro />}/>
                    <Route path="/habitos" element={<TelaHabitos />}/>
                    <Route path="/hoje" element={<TelaHoje />}/>
                    <Route path="/historico" element={<TelaHistorico />} />
                </Routes>
            </BrowserRouter>
        </DadosUsuario>
    )
}