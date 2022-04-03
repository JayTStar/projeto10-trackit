import axios from "axios";
import styled from "styled-components";
import { useContext } from "react";

export default function Habitos({id, nome, dias}){
    const [dadosUsuario, setDadosUsuario] = useContext(dadosUsuario);
    const listaDias =[{name: "D", id: 1},{name: "S", id: 2},{name: "T", id: 3},{name: "Q", id: 4},{name: "Q", id: 5},{name: "S", id: 6},{name: "S", id: 7}];
    const diasSelecionados = listaDias.filter(elemento => dias.includes(elemento.id) );

    const config = {
        headers: {
            "Authorization": `Bearer ${dadosUsuario.token}`
        }
    }

    function pegaDias(){
        return(
            <>
                {listaDias.map(elemento => {
                    const {name, id} = elemento;
                    const selecionado = diasSelecionados.some(elemento => elemento.id === id);
                    return (<Dia selecionado={selecionado} >{elemento.name}</Dia>)
                })}
            </>
        )
    }

    function excluirHabito(){
        const requisicao = axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`, config);

        requisicao.then(resposta => {
            alert("Habito excluído!");

            window.location.reload();
        })

        requisicao.catch(erro => {
            console.log(erro.response);
        })
    }

    const renderDias = pegaDias();

    return(
        <Conteudo>
            
            <Topo> <p>{nome}</p> <ion-icon onClick={() => excluirHabito()} name="trash-outline"></ion-icon></Topo>
            
            <Dias>{renderDias}</Dias>
            
        </Conteudo>
    )
}

function corDia(selecionado){
    if(!selecionado) return "#DBDBDB"
    else return "#FFFFFF"
}

function corDiaFundo(selecionado){
    if(!selecionado) return "#FFFFFF"
    else return "#DBDBDB"
}

const Conteudo = styled.section`
    width: 340px;
    height: 91px;

    background-color: #FFFFFF;
    border-radius: 5px;

    box-sizing: border-box;
    padding: 18px;
    margin-bottom: 30px; 

`

const Topo = styled.div`
    width: 100%
    height: auto;

    display:flex;
    justify-content: space-between;

    ion-icon{
        font-size: 20px;
        color:#666666;

        cursor: pointer;
    }
`

const Dias = styled.ul`
    display: flex;
    justify-content: space-between;

    margin-top: 10px;
    box-sizing: border-box;
`

const Dia = styled.p`
    width: 30px;
    height: 30px;

    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;

    color: ${({selecionado}) => corDia(selecionado)};

    background: ${({selecionado}) => corDiaFundo(selecionado)};
    border: 1px solid #D5D5D5;
    box-sizing: border-box;
    border-radius: 5px;

    display: flex;
    align-items: center;
    justify-content: center;
`