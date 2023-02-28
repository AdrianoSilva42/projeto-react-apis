import Card from "../../components/Card/Card";
import { Container, H3 } from "./PokedexPage.styled";
import Header from "../../components/Header/Header";
import { BASE_URL } from "../../constants/url";
import { useContext } from "react";
import { ContextoGlobal } from "../../contexts/GlobalContext";


function PokedexPage() {
  const contexto = useContext(ContextoGlobal)

  const { pokedex, removeFromPokedex } = contexto;
  

  return (
    <>
    
      <Container>
      <Header />
        <H3>Meus Pokémons</H3>
        
          {pokedex.map((pokemon) => (
            <Card
              key={pokemon.name}
              pokemonUrl={`${BASE_URL}/${pokemon.name}`}
              removeFromPokedex={removeFromPokedex}
            />
          ))}
        
      </Container>
    </>
  );
}

export default PokedexPage;
