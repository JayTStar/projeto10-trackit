import { Link } from "react-router-dom"
import { useState } from "react"
import styled from "styled-components";

export default function Footer(){
    return(
        <Conteudo>
            <Link to={{pathname: "/habitos"}}><p>Hábitos</p></Link>
            <Link to={{pathname: "/hoje"}}><Hoje>Hoje</Hoje></Link>
            <Link to={{pathname: "/historico"}}><p>Histórico</p></Link>
        </Conteudo>
    )
}

const Conteudo = styled.footer`
    width: 100%;
    height: 70px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0 36px;
    box-sizing: border-box;

    position: fixed;
    left: 0;
    bottom: 0;

    p{
        width: auto;
        height: 22px;

        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;
        text-align: center;

        color: #52B6FF;
    }
`

const Hoje = styled.div`
width: 91px;
height: 91px;

border-radius: 50%;

background-color: #52B6FF;

font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 22px;

color: #FFFFFF;

display: flex;
align-items: center;
justify-content: center;

margin-bottom: 50px;
`