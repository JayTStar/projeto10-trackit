import { createContext, useState ,useContext} from "react";

export const DadosUsuario = createContext();

export default function DadosdoUsuario({ children }){
    const [usuario, setUsuario] = useState(null);

    return (
        <DadosUsuario.Provider value={{usuario, setUsuario}}>
          {children}
        </DadosUsuario.Provider>
      );
}