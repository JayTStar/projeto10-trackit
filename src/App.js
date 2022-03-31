import { useState, createContext  } from "react"
import styledComponents from "styled-components"
import TelaInicio from "./Componentes/TelaInicio"
import TelaCadastro from "./Componentes/TelaCadastro"
import TelaHabitos from "./Componentes/TelaHabitos"

import { BrowserRouter, Routes, Route } from "react-router-dom"
export default function App(){
    const [usuario, setUsuario] = useState(null);

    const UsuarioContext = createContext();

    return(
        <UsuarioContext.Provider value={usuario}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<TelaInicio salvarUsuario={(usuario) => setUsuario(usuario)}/>} />
                    <Route path="/cadastro" element={<TelaCadastro/>}/>
                    <Route path="/habitos" element={<TelaHabitos/>}/>
                </Routes>
            </BrowserRouter>
        </UsuarioContext.Provider>
    )
}