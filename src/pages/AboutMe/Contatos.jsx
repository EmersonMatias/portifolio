import styled from "styled-components"
import GeneralButton2 from "../../components/GeneralButton2"
import { links } from "./text"

export default function Contatos() {
    return (
        <Container>
            <GeneralButton2 text="Gmail"/>
            <GeneralButton2 text="Whatsapp" onclick={() => window.open(links.whatsapp, `_blank`)}/>
            <GeneralButton2 text="Instagram" />
            <GeneralButton2 text="Linkedin" onclick={() => window.open(links.linkedin, `_blank`)}/>
            <GeneralButton2 text="Github" onclick={() => window.open(links.github, `_blank`)}/>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 18rem;
`