import { useState, createContext  } from "react"
import TelaInicio from "./Componentes/TelaInicio"
import TelaCadastro from "./Componentes/TelaCadastro"
import TelaHabitos from "./Componentes/TelaHabitos"
import TelaHoje from "./Componentes/TelaHoje"

import { BrowserRouter, Routes, Route } from "react-router-dom"
export default function App(){
    const [usuario, setUsuario] = useState("");

    const dadosUsuario = createContext();

    return(
        <dadosUsuario.Provider value={usuario}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<TelaInicio salvarUsuario={(usuario) => setUsuario(usuario)}/>} />
                    <Route path="/cadastro" element={<TelaCadastro />}/>
                    <Route path="/habitos" element={<TelaHabitos usuario={usuario}/>}/>
                    <Route path="/hoje" element={<TelaHoje usuario={usuario}/>}/>
                </Routes>
            </BrowserRouter>
        </dadosUsuario.Provider>
    )
}