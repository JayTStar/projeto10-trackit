import styled from "styled-components";

export default function Header({foto}){
    return(
        <Conteudo>
            <p>TrackIt</p>
            <img src={foto} alt="Foto de Perfil"/>
        </Conteudo>
    )
}

const Conteudo = styled.header`
    width: 100%;
    height: 70px;
    padding: 0 18px;

    box-sizing: border-box;

    background: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

    display: flex;
    align-items: center;
    justify-content: space-between;

    position: fixed;
    left: 0;
    top: 0;

    p{
        font-family: 'Playball', cursive;
        font-style: normal;
        font-weight: 400;
        font-size: 38.982px;
        line-height: 49px;

        color: #FFFFFF;
    }

    img{
        width: 51px;
        height: 51px;

        background: url(image.png);
        border-radius: 50%;
    }
`