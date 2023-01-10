import styled from "styled-components"
import HeroSection from "./HeroSection"
import HomeSection2 from "./Home_Section_2"

export default function Home() {
    return (
        <Container>
            <HeroSection />
            <HomeSection2 />

        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    background-color: #000000;
    font-family: 'Lato', sans-serif;
    display: flex;
    flex-direction: column;
    color: #FFFFFF;
`