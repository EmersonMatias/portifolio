import styled from "styled-components"
import Header from "../../components/Header"

import HeroSectionImage from "../../images/HeroSection.png"

export default function HeroSection() {
    return (
        <Container>
            <Header />
            <div className="content">
                <h2>Emerson Matthias</h2>
                <h1> Desenvolvedor Full Stack & Web Designer</h1>

            </div>

        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-image: url(${HeroSectionImage});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: top;
    display: flex;
    flex-direction: column;
    align-items: center;

    .content{
        width: 65vw;
        text-align: center;
        margin-top: 8rem;
    }

    h2{
        font-size: 8rem;
        line-height: 9.6rem;
        font-weight: 300;
    }

    h1{
        font-size: 9.8rem;
        line-height: 11.8rem;
        font-weight: bold;
        background: -webkit-linear-gradient(0,rgba(240, 123, 44, 1) 0, rgba(156, 47, 228, 1) 100%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
  
`