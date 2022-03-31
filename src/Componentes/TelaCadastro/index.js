import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import axios from "axios";
import styled from "styled-components";
import Logo from "../Midias/Logo.png"

export default function TelaCadastro(){
    const[email, setEmail] = useState(undefined);
    const[senha, setSenha] = useState(undefined);
    const[nome, setNome] = useState(undefined);
    const[foto, setFoto] = useState(undefined);

    const navigate = useNavigate();

    function realizarCadastro(){
        const infoUsuario = {
            email: email,
            name: nome,
            image: foto,
            password: senha
        }

        console.log(infoUsuario);

        const requisicao = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up", infoUsuario);

        requisicao.then(resposta => {
            console.log(resposta.data);
            navigate("/");
        });

        requisicao.catch(resposta => {
            console.log("deu erro");
        })
    }

    return(
        <Conteudo>
            <img src={Logo} alt="Logo"/>
            <ul>
                <input placeholder="email" type="email" onChange={(e) => {setEmail(e.target.value)}}/>
                <input placeholder="senha" type="password" onChange={(e) => {setSenha(e.target.value)}}/>
                <input placeholder="nome" type="text" onChange={(e) => {setNome(e.target.value)}}/>
                <input placeholder="foto" type="url" onChange={(e) => {setFoto(e.target.value)}}/>
            </ul>

            <ul>
                <div onClick={realizarCadastro}>Cadastrar</div>
                <Link to="/"> <p>Já tem uma conta? Faça login!</p> </Link>
            </ul>
        </Conteudo>
    )
}

const Conteudo = styled.main`
    width: 100%;
    height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    font-family: 'Lexend Deca', sans-serif;

    img{
        width: 180px;
        height: 178.38px;
    }

    ul{
        width: auto;
        height: auto;

        display: flex;
        flex-direction: column;
        align-items: center;
    }

    input{
        width: 303px;
        height: 45px;

        background-color: #FFFFFF;

        margin: 10px;
        border: 1px solid #D5D5D5;
        box-sizing: border-box;
        border-radius: 5px;

        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
        color: #DBDBDB;
    }

    div{
        width: 303px;
        height: 45px;

        background-color: #52B6FF;
        border-radius: 5px;

        font-style: normal;
        font-weight: 400;
        font-size: 20.976px;
        line-height: 26px;
        text-decoration: none;

        display: flex;
        justify-content: center;
        align-items: center;

        color: #FFFFFF;
    }

    P{
        width: 232px;
        height: 17px;
        
        font-style: normal;
        font-weight: 400;
        font-size: 13.976px;
        line-height: 17px;
        text-align: center;
        text-decoration-line: underline;

        box-sizing: border-box;
        margin: 25px;

        color: #52B6FF;
    }
`