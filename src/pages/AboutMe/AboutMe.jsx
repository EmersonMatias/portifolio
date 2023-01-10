import styled from "styled-components"
import Header from "../../components/Header"
import LeftContent from "./LeftContent"

export default function AboutMe() {
    return (
        <Container>
            <Header />
            <div className="mainContent">
                <LeftContent />
                <div className="rightContent">
                    aa
                </div>
            </div>
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
        background-color: pink;
    }

    .rightContent{
        width: 41vw;
        background-color: antiquewhite;
        margin-right: 8rem;
    }
`