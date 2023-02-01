import Card from "../../components/Card/Card";
import { Container, H3 } from "./HomePage.styled";
import Header from "../../components/Header/Header";
import { useContext } from "react";
import { ContextoGlobal } from "../../contexts/GlobalContext";


function HomePage() {
  const contexto = useContext(ContextoGlobal)
  const {addToPokedex, filteredPokelist  } = contexto;

  return (
    <>
    <Container>
        <Header />
        <H3>Todos os Pokémons</H3>

          {filteredPokelist().map((pokemon) => (
            <Card
              key={pokemon.url}
              pokemonUrl={pokemon.url}
              addToPokedex={addToPokedex}          
            />
          ))}
      
    </Container>
    </>
  );
}

export default HomePage;
