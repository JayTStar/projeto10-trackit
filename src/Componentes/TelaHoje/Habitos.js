import styled from "styled-components";
import axios from "axios";

export default function Habitos({id,nome,feito,sequencia,recorde, feitos, setFeitos}){


    const token = localStorage.getItem("token");


    const config = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }

    function marcarFeito(habitoFeito){
        const requisicao = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habitoFeito}/check`, "" , config);

        requisicao.then(resposta =>{
            alert("Parabens por concluir seu hábito")
            setFeitos(feitos += 1)
        });

        requisicao.catch(erro => {
            console.log(erro.response);
        })
    }

    function desmarcarFeito(habito){
        const requisicao = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habito}/uncheck`, "" , config);

        requisicao.then(resposta =>{
            alert("Habito desmarcado com sucesso")
            setFeitos(feitos -= 1)
        });

        requisicao.catch(erro => {
            console.log(erro.response);
        })
    }

    function handleClick(id, feito){
        if(feito){
            desmarcarFeito(id);
        }
        else{
            marcarFeito(id);
        }
    }
    return(
        <Conteudo feito={feito}>
            <h1>{nome}</h1>
            <ion-icon onClick={() => {handleClick(id, feito)}}  name="checkbox-outline"></ion-icon>
            <p>Sequência atual: {sequencia}</p>
            <p>Seu recorde: {recorde}</p>
        </Conteudo>
    )
}

function checkboxColor(feito){
    if (feito) return '#8FC549'
    else return '#EBEBEB'
}

const Conteudo = styled.section`
    width: 340px;
    height: 94px;

    background-color: #FFFFFF;
    border-radius: 5px;

    position: relative;

    box-sizing: border-box;
    padding: 15px;
    margin-bottom: 10px;

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

        color: ${({feito}) => checkboxColor(feito)};
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