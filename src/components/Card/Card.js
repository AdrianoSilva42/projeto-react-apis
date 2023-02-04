import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { goToDetailsPage } from "../../routes/coordinator";
import { Container, ImgPokemon, ImgPokebola, Num, Nome,
         CapturarButton, DetalheButton, RemoveButton, Types } from "./Card.styled";
import PokeBola from '../../img/pokebola.png'
import { getColors } from "../../utils/ReturnCardColor";
import DetalhesPokemon from "../../pages/DetalhesPokemon/DetalhesPokemon";



export default function Card(props) { 
  const { pokemonUrl, addToPokedex, removeFromPokedex, } = props;

  // hook para saber nosso path atual
  const location = useLocation();

  // hook para redirecionar
  const navigate = useNavigate();

  const [pokemon, setPokemon] = useState({});
  
  console.log(pokemon)

  useEffect(() => {
    fetchPokemon();
  }, []);

  const fetchPokemon = async () => {
    try {
      const response = await axios.get(pokemonUrl);
      setPokemon(response.data);
      
      //console.log(response.data)
    } catch (error) {
      console.log("Erro ao buscar lista de pokemons");
      console.log(error);
    }
  };

  const typeName = pokemon.types?.map((type) => type.type)

  return (
    <Container color={getColors(pokemon.types?.[0].type.name)}>

      <ImgPokemon src={pokemon.sprites?.other["official-artwork"].front_default} alt={pokemon.name} />
      <ImgPokebola src={PokeBola} />
      <Num>#0{pokemon.id}</Num>
      <Nome>{pokemon.name}</Nome>

      <Types>
        {typeName?.map((type) => 
            <img src={`${type.name}.png`} key={type.name}/>
        )}
      </Types>
  
        {location.pathname === "/" ? (
          <CapturarButton onClick={() => addToPokedex(pokemon)}> Capturar! </CapturarButton>
        ) : (
          <RemoveButton onClick={() => removeFromPokedex(pokemon)}> Excluir</RemoveButton>
        )}

        <DetalheButton onClick={() => goToDetailsPage(navigate, pokemon.name)}> Detalhes </DetalheButton>
      
    </Container>
  );
}

