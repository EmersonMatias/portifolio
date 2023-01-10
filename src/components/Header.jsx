import styled from "styled-components"
import GeneralButton from "./GeneralButton"


export default function Header() {
    return (
        <Container>
            <GeneralButton text="Inicio" onclick={() => alert("OI")}/>
            <GeneralButton text="Portifólio"/>
            <GeneralButton text="Sobre mim  "/>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 4rem;
    display: flex;
    justify-content: center;
    margin-top: 1.6rem;
`