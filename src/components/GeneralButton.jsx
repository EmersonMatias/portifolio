import styled from "styled-components"

export default function GeneralButton({text, onclick, page}){

    return(
        <Container onClick={onclick} text={text} page={page}>
            {text}
        </Container>
    )
}

const Container = styled.button`
    height: 4rem;
    font-family: 'Lato', sans-serif;
    font-size: 1.7rem;
    font-weight: bold;
    line-height: 2.4rem;
    color: #FFFFFF;
    background: linear-gradient(171deg, rgba(121, 60, 161, ${props=> props.text === props.page ? 1 : 0.3}) 7%, rgba(240, 123, 44, ${props=> props.text === props.page ? 1 : 0.3}));
    border-radius: 32px;
    margin-right: 3.2rem;
    padding: 0 4.8rem;
    cursor: pointer;
`