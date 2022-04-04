import styled from "styled-components";
import Header from "../Header"
import Footer from "../Footer"

export default function TelaHistorico(){

    return(
        <>
            <Header/>
            <Conteudo>
                <h1>Histórico</h1>
                <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
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

    h1{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 22.976px;
        line-height: 29px;

        color: #126BA5;

        margin-bottom: 17px;
    }

    p{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;

        color: #666666;
    }
`