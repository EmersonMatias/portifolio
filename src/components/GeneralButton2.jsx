import styled from "styled-components"

export default function GeneralButton2({ text, onclick, icon}) {
    return (
        <Container>
            <button onClick={onclick}><p>{text}</p><img src={icon}/></button>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 4rem;
    border-radius: 38px;
    width: 19rem;
    height: 7.2rem;
    background: linear-gradient(171deg, rgba(121, 60, 161, 1) 7%, rgba(240, 123, 44, 1));

    button{
        width: 18rem;
        height: 6.2rem;
        border-radius: 32px;
        border: none;
        background-color: #292929;
        color: #FFFFFF;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
       
        p{
            font-size: 1.7rem;
            font-weight: bold;
            line-height: 2.4rem;
            background: -webkit-linear-gradient(135deg, rgba(121, 60, 161, 1) 0%, rgba(240, 123, 44, 1) 100%);
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        img{
            width: 3rem;
            height: 3rem;
            margin-left: 0.8rem;
        }
     
    }
`