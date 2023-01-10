import styled from "styled-components"
import GeneralText from "../../components/GeneralText"
import personIcon from "../../images/personIcon.svg"
import { textContent } from "./text.js"

export default function RightContent() {
    return (
        <Container>
            <GeneralText rightIcon={personIcon} title={"Sobre Mim"} text={textContent.SobreMim}/>
            <GeneralText leftIcon={personIcon} title={"Minha Trajetória"} text={textContent.SobreMim}/>
            <GeneralText rightIcon={personIcon} title={"Técnologias Trabalhadas"} text={textContent.SobreMim}/>
            <GeneralText leftIcon={personIcon} title={"Principais Áreas"} text={textContent.SobreMim}/>
        </Container>
    )
}


const Container = styled.div`
    width: 41vw;
    background-color: black;
    margin-right: 8rem;
    
`