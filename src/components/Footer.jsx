import styled from "styled-components"

export default function Footer() {
    return (
        <Container>
           Copiright 2022 Emerson Matthias. Todos os direitos reservados.
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 5.6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(67, 67, 67, 0.2);
    margin-top: 8rem;
    font-size: 1.7rem;
    font-weight: bold;
`