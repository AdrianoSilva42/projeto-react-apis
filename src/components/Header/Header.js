import { useLocation, useNavigate, useParams } from "react-router-dom";
import { goToHomePage, goToPokedexPage } from "../../routes/coordinator";
import { Container, Button1, P1, Img, Button2, RemoveButton } from "./Header.styled";
import img from "../../img/logoPokemon.png"
import { useContext } from "react";
import { ContextoGlobal } from "../../contexts/GlobalContext";

function Header({detalhes}) {


  const contexto = useContext(ContextoGlobal)

  const {removeFromPokedex} = contexto
  
  // hook para saber nosso path atual
  const location = useLocation();

  // hook para redirecionar
  const navigate = useNavigate();

  const{nome} = useParams()

  
  
  const renderHeader = () => {
    switch (location.pathname) {
      case "/":
        return (
          <>
          <Img src={img}/>
            <Button1 onClick={() => goToPokedexPage(navigate)}>
              <P1>Pokédex</P1>
            </Button1>
            
          </>
        );
      case "/pokedex":
        return (
          <>
          <Img src={img}/>
            <Button2 onClick={() => goToHomePage(navigate)}>
               Todos os Pokémons
            </Button2>
            
          </>
        );
      case `/detalhesPokemon/${nome}`:
        return (
          <>
          <Img src={img} />
          <Button2 onClick={() => goToHomePage(navigate)} >
            Todos os pokémons
          </Button2>
          <RemoveButton onClick={() => removeFromPokedex(detalhes)} >
            Excluir da Pokedex
          </RemoveButton>
          </>
        );
      // default:
      //   return (
      //     <>
      //       <button onClick={() => goToHomePage(navigate)}>
      //         Voltar para página inicial
      //       </button>
      //       <span>Página inexistente</span>
      //     </>
      //   );
    }
  };

  return <Container>{renderHeader()}</Container>;
}

export default Header;
