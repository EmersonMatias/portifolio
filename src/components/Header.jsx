import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import GeneralButton from "./GeneralButton"

export default function Header({page}) {
    const navigate = useNavigate()
    

    return (
        <Container>
            <GeneralButton text="Inicio" onclick={() => navigate("/")} page={page}/>
            <GeneralButton text="Portifólio"  page={page}/>
            <GeneralButton text="Sobre mim" onclick={() => navigate("/sobremim")} page={page}/>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 4rem;
    display: flex;
    justify-content: center;
    margin-top: 1.6rem;
    position: absolute;
    top: 0;
    right: 0;
`