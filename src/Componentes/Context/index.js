import { createContext, useState ,useContext} from "react";

export const DadosUsuario = createContext();

export default function DadosdoUsuario({ children }){
    const [usuario, setUsuario] = useState(null);
    const [progresso, setProgresso] = useState(0);
    const [meusHabitos, setMeusHabitos] = useState([])
    const [habitosHoje, setHabitosHoje] = useState([]);
    const [habitosConclidos, setHabitosConcluidos] = useState([]);

    return (
        <DadosUsuario.Provider value={{usuario, setUsuario, progresso, setProgresso, meusHabitos, setMeusHabitos, habitosHoje, setHabitosHoje, habitosConclidos, setHabitosConcluidos}}>
          {children}
        </DadosUsuario.Provider>
      );
}

export function useUser(){
  const user = useContext(DadosUsuario);
  const {usuario, setUsuario} = user;

  return {usuario, setUsuario};
}

export function useProgresso(){
  const progress = useContext(DadosUsuario);
  const {progresso, setProgresso} = progress

  return {progresso, setProgresso}
}

export function useHabitos(){
  const habitos = useContext(DadosUsuario);
  const {meusHabitos, setMeusHabitos} = habitos;

  return {meusHabitos, setMeusHabitos}
}

export function useHoje(){
  const hoje = useContext(DadosUsuario);
  const {habitosHoje, setHabitosHoje} = hoje;

  return {habitosHoje, setHabitosHoje}
}