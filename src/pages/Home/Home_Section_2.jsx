import styled from "styled-components"

export default function HomeSection2(){
    return(
        <Container>
            <p className="textContent">
            Quer um site moderno? Ou quem sabe clássico e elegante? Até mesmo deslocado e estiloso como você? Então, 
            está  no lugar certo. Criação de sites personalizados que representam a essência de sua loja, produto ou pessoa. 
            Se é isso que está procurando:
            </p>
          <div className="buttons">
            <button>Mande uma mensagem</button>
            <button>Veja meu trabalho</button>
          </div>
        </Container>
    )
}


const Container = styled.div`
    width: 100%;
    height: 100vh;
    color: #FFFFFF;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    p{
        width: 65vw;
        line-height: 4.4rem;
        font-size: 2.6rem;
        font-weight: 600;
        text-align: center;
    }

    .buttons{
        margin-top: 80px;
    }

    button{
        width: 50rem;
        height: 8rem;
        font-size: 3.4rem;
        font-weight: 600;
        line-height: 4.4rem;
        border-radius: 32px;
        margin-right: 3.2rem;
        cursor: pointer;
        background: -webkit-linear-gradient(0,rgba(240, 123, 44, 1) 0, rgba(156, 47, 228, 1) 100%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

`