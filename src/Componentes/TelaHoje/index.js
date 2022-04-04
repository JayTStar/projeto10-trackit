import { useEffect, useState } from "react"
import axios from "axios";
import styled from "styled-components";
import Header from "../Header"
import Footer from "../Footer"
import Habitos from "./Habitos"
import { useHoje, useProgresso, useHabitos } from "../Context";

export default function TelaHoje(){
    const {habitosHoje, setHabitosHoje} = useHoje();
    const {progresso, setProgresso} = useProgresso();
    const {meusHabitos, setMeusHabitos} = useHabitos();

    const [feitos, setFeitos] = useState(0);

    const token = localStorage.getItem("token");

    const config = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }

    useEffect(() => {
        const requisicao = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today", config)

        requisicao.then(resposta => {
            setHabitosHoje(resposta.data);
            setFeitos(checaFeitos());
        })

        requisicao.catch(erro =>{
            console.log(erro.response);
        })
    }, [meusHabitos, feitos]);

    useEffect(() => {
        setProgresso(((feitos / habitosHoje.length) * 100).toFixed(0));
    }, [feitos]);
    

    function renderHabitos(){

        if(habitosHoje.length === 0){
            return(
             <Vazio>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</Vazio>
            )
        }
        else{
            return(
                
                 <ul>
                     {habitosHoje.map(elemento => {return <Habitos id={elemento.id} nome={elemento.name} feito={elemento.done} sequencia={elemento.currentSequence} recorde={elemento.highestSequence} feitos={feitos} setFeitos={setFeitos}/>})}
                 </ul>
            )
        }
    }

    function pegaDia(){

        const diasDaSemana = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"]
        const today = new Date();

        return <Data>{diasDaSemana[today.getDay()]}, {today.getDate()}/{today.getMonth()+1}</Data>
    }

    function habitosFeitos(){
        if(feitos > 0){
            return <Concluidos feito={feitos}>{((feitos / habitosHoje.length) * 100).toFixed(0)}% dos hábitos concluídos</Concluidos>
        }
        else{
            return <Concluidos feito={feitos}>Nenhum hábito concluído ainda</Concluidos>
        }
    }

    function checaFeitos(){
        const concluidos = habitosHoje.filter(elemento => elemento.done === true);

        return concluidos.length;
    }

    const habitos = renderHabitos();
    const hoje = pegaDia();
    const concluidos = habitosFeitos();

    return(
        <>
            <Header/>
            <Conteudo>
                {hoje}
                {concluidos}
                {habitos}
            </Conteudo>
            <Footer/>
        </>
    )
}

function corConcluido(feitos){
    if(feitos>0) return '#8FC549'
    else return '#BABABA'
}

const Conteudo = styled.main`
    width: 100%;
    height: calc(100vh - 70px - 70px);
    background-color:#F2F2F2;

    box-sizing: border-box;
    margin: 70px 0;
    padding: 30px 20px;

    ul{
        margin-top: 28px;
    }
`

const Vazio = styled.p`
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;

    margin-top: 30px;
`

const Data = styled.p`
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 22.976px;
    line-height: 29px;

    color: #126BA5;
`

const Concluidos = styled.p`
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;

    color: ${({feito}) => corConcluido(feito)};
`