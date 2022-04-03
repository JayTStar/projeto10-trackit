import { useState, useEffect } from "react"
import axios from "axios";
import styled from "styled-components";
import Header from "../Header"
import Footer from "../Footer"
import Habitos from "./Habitos"

export default function TelaHoje({usuario}){
    const [habitosHoje, setHabitosHoje] = useState([{
        "id": 3,
        "name": "Acordar",
        "done": true,
        "currentSequence": 1,
        "highestSequence": 1
    }]);

    const config = {
        headers: {
            "Authorization": `Bearer ${usuario.token}`
        }
    }

    // useEffect(() => {
    //     const requisicao = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today", config)

    //     requisicao.then(resposta => {
    //         setHabitosHoje(resposta.data);

    //         console.log(habitosHoje);
    //     })

    //     requisicao.catch(erro =>{
    //         console.log(erro.response);
    //     })
    // }, []);

    function renderHabitos(){

        if(habitosHoje.length === 0){
            return(
             <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
            )
        }
        else{
            return(
                 <ul>
                     {habitosHoje.map(elemento => {return <Habitos id={elemento.id} nome={elemento.name} feito={elemento.done} sequencia={elemento.currentSequence} recorde={elemento.highestSequence}/>})}
                 </ul>
            )
        }
    }

    const habitos = renderHabitos();
    return(
        <>
            <Header foto={usuario.image}/>
            <Conteudo>
                {habitos}
            </Conteudo>
            <Footer/>
        </>
    )
}

const Conteudo = styled.main`
    width: 100%;
    height: calc(100vh - 70px - 70px);
    background-color:#F2F2F2;

    box-sizing: border-box;
    margin: 70px 0;
    padding: 30px 20px;
`