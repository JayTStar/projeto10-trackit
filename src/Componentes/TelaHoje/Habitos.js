import styled from "styled-components";

export default function Habitos({id,nome,feito,sequencia,recorde}){
    return(
        <Conteudo>
            <h1>{nome}</h1>
            <ion-icon name="checkbox-outline"></ion-icon>
            <p>Sequência atual: {sequencia}</p>
            <p>Seu recorde: {recorde}</p>
        </Conteudo>
    )
}

const Conteudo = styled.section`
    width: 340px;
    height: 94px;

    background-color: #FFFFFF;
    border-radius: 5px;

    position: relative;

    box-sizing: border-box;
    padding: 15px;

    h1{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 25px;

        color: #666666;

        margin-bottom: 7px;
    }

    ion-icon{
        font-size:69px;

        color: #EBEBEB;
        box-sizing: border-box;
        border-radius: 5px;

        position: absolute;
        right: 13px;
        bottom: 13px;
    }

    p{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 12.976px;
        line-height: 16px;

        color: #666666;
    }
`