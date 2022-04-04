import { useState, useEffect, useContext } from "react"
import axios from "axios";
import styled from "styled-components";
import Header from "../Header"
import Footer from "../Footer"
import Habito from "./CriacaoHabito"
import Habitos from "./Habitos";
import { useHabitos } from "../Context";

export default function TelaHabitos(){
    const {meusHabitos, setMeusHabitos} = useHabitos();

    const token = localStorage.getItem("token");

    const [deleted, setDeleted] = useState(false);
    const [criacao,setCriacao] = useState(false);

    const config = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }

    useEffect(() => {
        const requisicao = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", config)

        requisicao.then(resposta => {
            setMeusHabitos(resposta.data);
        })

        requisicao.catch(erro =>{
            console.log(erro.response);
        })
    }, [criacao, deleted]);

    useEffect(() => {
        setDeleted(false);
    }, [meusHabitos])


    function renderHabitos(){

       if(meusHabitos.length === 0){
           return(
            <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
           )
       }
       else{
           return(
                <ul>
                    {meusHabitos.map(elemento => {return <Habitos id={elemento.id} nome={elemento.name} dias={elemento.days} setDeleted={setDeleted}/>})}
                </ul>
           )
       }
    }

    function handleClick(){
        setCriacao(true);
        criacaoHabito();
    }

    function criacaoHabito(){
        if(criacao === false){
            return "";
        }
        else{
            return(
                <Habito setCriacao={setCriacao}/>
            )
        }
    }

    const habitos = renderHabitos();
    const cardCriacao = criacaoHabito();

    return(
        <>
            <Header/>
            <Conteudo>
                <Topo><p>Meus hábitos</p> <div onClick={handleClick}>+</div></Topo>
                {cardCriacao}
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

    p{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
    }
`

const Topo = styled.section`
    width: 100%;
    height: auto;

    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 30px;

    p{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 22.976px;
        line-height: 29px;

        color: #126BA5;
    }

    div{
        width: 40px;
        height: 35px;
        
        background-color: #52B6FF;
        border-radius: 5px;

        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 27px;

       display: flex;
       align-items: center;
       justify-content: center;

        color: #FFFFFF;

        cursor: pointer;
    }
`