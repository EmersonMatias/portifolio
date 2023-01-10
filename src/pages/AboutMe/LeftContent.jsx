import styled from "styled-components"

export default function LeftContent() {
    return (
        <Container>
            <div className="image"></div>
            <h2>Emerson Matthias</h2>
            <p>Desenvolvedor Front End /
                Back End / Web Design / HTML /
                CSS / Javascript / Styled-Components / 
                NodeJS / MongoDB / Postgres
            </p>

        </Container>
    )
}

const Container = styled.div`
    width: 35vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: black;
    margin-left: 8rem;

    .image{
        width: 27vw;
        height: 27vw;
        border-radius: 100%;
        background-color: #FFFFFF;
    }

    h2{
        font-size: 8rem;
        line-height: 9.6rem;
        font-weight: 300;
    }

    p{
        font-size: 3rem;
        font-weight: 300;
        text-align: justify;
    }
    
`