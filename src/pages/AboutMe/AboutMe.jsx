import styled from "styled-components"
import Header from "../../components/Header"
import Contatos from "./Contatos"
import LeftContent from "./LeftContent"
import RightContent from "./RightContent"

export default function AboutMe() {
    return (
        <Container>
            <Header />
            <div className="mainContent">
                <LeftContent />
                <RightContent />
            </div>
            <Contatos />
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: #000000;
    color: #FFFFFF;
    font-family: 'Lato', sans-serif;

    .mainContent{
        display: flex;
        justify-content: space-between;
        margin-top: 10.4rem;
    }
`