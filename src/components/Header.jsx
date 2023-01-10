import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import GeneralButton from "./GeneralButton"

export default function Header() {
    const navigate = useNavigate()

    return (
        <Container>
            <GeneralButton text="Inicio" onclick={() => navigate("/")}/>
            <GeneralButton text="Portifólio"/>
            <GeneralButton text="Sobre mim" onclick={() => navigate("/sobremim")}/>
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