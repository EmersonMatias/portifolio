import styled from "styled-components"
import GeneralButton2 from "../../components/GeneralButton2"
import { links } from "./text"
import iconGmail from "../../images/iconGmail2.svg"
import iconWpp from "../../images/iconWpp2.svg"
import iconInstagram from "../../images/iconInstagram2.svg"
import iconLinkedin from "../../images/iconLinkedin2.svg"
import iconGithub from "../../images/github3.svg"
import Footer from "../../components/Footer"

export default function Contatos() {
    return (
        <Container>

            <h2>CONTATOS</h2>
            <div className="contacts">
                <GeneralButton2 text="Gmail" icon={iconGmail} />
                <GeneralButton2 text="Whatsapp" onclick={() => window.open(links.whatsapp, `_blank`)} icon={iconWpp} />
                <GeneralButton2 text="Instagram" icon={iconInstagram} />
                <GeneralButton2 text="Linkedin" onclick={() => window.open(links.linkedin, `_blank`)} icon={iconLinkedin} />
                <GeneralButton2 text="Github" onclick={() => window.open(links.github, `_blank`)} icon={iconGithub} />
            </div>

            <Footer />
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 18rem;

    h2{
        font-size: 6.8rem;
        font-weight: 300;
        margin-bottom: 4rem;
        background: -webkit-linear-gradient(45deg, rgba(121, 60, 161, 1) 0%, rgba(240, 123, 44, 1) 100%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    .contacts{
        display: flex;
    }
`