import { useState, useContext } from "react"
import axios from "axios";
import styled from "styled-components";
import { DadosUsuario } from "../Context";

export default function Habito({ setCriacao}){
    const listaDias =[{name: "D", id: 0},{name: "S", id: 1},{name: "T", id: 2},{name: "Q", id: 3},{name: "Q", id: 4},{name: "S", id: 5},{name: "S", id: 6}]

    const [nomeHabito, setNomeHabito] = useState(undefined)
    const [diasSelecionados, setDiasSelecionados] = useState([]);

    const {usuario, setUsuario} = useContext(DadosUsuario);

    const token = localStorage.getItem("token");

    const config = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }

    function enviaHabito(){
        if(nomeHabito !== undefined){
            const estrutura = { name: nomeHabito, days: diasSelecionados};

            const requisicao = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", estrutura, config);

            requisicao.then(resposta => {
                setCriacao(false);
            })

            requisicao.catch(erro => {
                console.log(erro.response);
            })
        }
    }

    function toggle(id) {
        const selecionado = diasSelecionados.some(elemento => elemento == id);

        if(!selecionado) {
            setDiasSelecionados([...diasSelecionados, id]);
        } else {
          const novosDias = diasSelecionados.filter(elemento => elemento !== id);
          setDiasSelecionados(novosDias);
        }
    }

    function renderDias(){
        return(
            listaDias.map( dia => {
                const {name, id} = dia
                const selecionado = diasSelecionados.some(elemento => {
                    return elemento == id
                });
                return(<Dia selecionado={selecionado} onClick={(e) => toggle(id)}>{name}</Dia>);
            })
        )
    }

    const dias = renderDias();

    return(
        <Conteudo>
            <input placeholder="nome do hábito" onChange={e => setNomeHabito(e.target.value)}/>
            <Dias>{dias}</Dias>
            <Botoes><p onClick={() => setCriacao(false)}>Cancelar</p> <div onClick={() => enviaHabito()}>Salvar</div></Botoes>
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
    height: 180px;

    background-color: #FFFFFF;
    border-radius: 5px;

    box-sizing: border-box;
    padding: 18px;
    margin-bottom: 30px; 

    input{
        width: 100%;
        height: 45px;

        border: 1px solid #D5D5D5;
        box-sizing: border-box;
        border-radius: 5px;
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

    cursor: pointer;
`

const Botoes = styled.ul`
    width: 100%;
    height: auto;

    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;

    display: flex;
    justify-content: flex-end;

    box-sizing: border-box;
    margin-top: 30px;

    P{
        width: auto;
        height: 35px;

        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 15.976px;
        line-height: 20px;

        display: flex;
        align-items: center;
        justify-content: center;

        margin-right: 30px;

        color: #52B6FF;

        cursor: pointer;
    }

    div{
        width: 84px;
        height: 35px;

        background: #52B6FF;
        border-radius: 5px;

        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 15.976px;
        line-height: 20px;

        display: flex;
        align-items: center;
        justify-content: center;

        color: #FFFFFF;

        cursor: pointer;
    }
`