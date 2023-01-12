import styled from "styled-components"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import HeroSection from "./HeroSection"
import HomeSection2 from "./Home_Section_2"

export default function Home() {
    const page = "Inicio";
    
    return (
        <Container>
            <Header page={page}/>
            <HeroSection />
            <HomeSection2 />
            <Footer />
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