import styled from "styled-components"
import GeneralText from "../../components/GeneralText"
import personIcon from "../../images/personIcon.svg"
import toolsIcon from "../../images/toolsIcon.svg"
import pathIcon from "../../images/pathIcon.svg"
import workIcon from "../../images/worksIcon.svg"
import { textContent } from "./text.js"

export default function RightContent() {
    return (
        <Container>
            <GeneralText rightIcon={personIcon} title={"Sobre Mim"} text={textContent.SobreMim}/>
            <GeneralText leftIcon={pathIcon} title={"Minha Trajetória"} text={textContent.SobreMim}/>
            <GeneralText rightIcon={toolsIcon} title={"Técnologias Trabalhadas"} text={textContent.SobreMim}/>
            <GeneralText leftIcon={workIcon} title={"Principais Áreas"} text={textContent.SobreMim}/>
        </Container>
    )
}


const Container = styled.div`
    width: 41vw;
    background-color: black;
    margin-right: 16rem;
    
`