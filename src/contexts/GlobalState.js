import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "../constants/url";
import { ContextoGlobal } from "../contexts/GlobalContext";
import Card from "../components/Card/Card"
import swal from "sweetalert2";
import img from '../img/pikachu.gif'
import { goToPokedexPage } from "../routes/coordinator";



export default function GlobalState(props){
  


    const [pokelist, setPokelist] = useState([]);
    const [pokedex, setPokedex] = useState([]);


    useEffect(() => {
      fetchPokelist();
    }, []);

    const fetchPokelist = async () => {
      try {
        const response = await axios.get(BASE_URL);
        setPokelist(response.data.results);
      } catch (error) {
        console.log("Erro ao buscar lista de pokemons");
        console.log(error.response);
      }
    };

   const msgAdd = () => {
    swal.fire({
      title: 'Gotcha!',
      text: 'O Pokémon foi adicionado a sua Pokédex',
      width: '451px',
      backdrop: `
      rgba(93, 93, 93, 0.8)
        url(${img})
        left top
        no-repeat
      `
    })
   };

    const addToPokedex = (pokemonToAdd, navigate) => {
      const isAlreadyOnPokedex = pokedex.find(
        (pokemonInPokedex) => pokemonInPokedex.name === pokemonToAdd.name
      );

      if (!isAlreadyOnPokedex) {
        const newPokedex = [...pokedex, pokemonToAdd];
        setPokedex(newPokedex);
      }
      msgAdd()
      goToPokedexPage(navigate)
    };


    const msgExcluir = () => { 
        swal.fire({
        title: 'Oh, no!',
        text: 'O Pokémon foi removido da sua Pokedex',
        width: '451px',
        backdrop: `
        rgba(93, 93, 93, 0.8)`
      })
    };


    const removeFromPokedex = (pokemonToRemove, navigate) => {
      const newPokedex = pokedex.filter(
        (pokemonInPokedex) => pokemonInPokedex.name !== pokemonToRemove.name
      );

      setPokedex(newPokedex);
      msgExcluir()
      goToPokedexPage(navigate)
      
    };

   //======================================================================================//

    // não mostrar pokemons que estão na pokedex
      const filteredPokelist = () =>
       pokelist.filter(
       (pokemonInList) =>
       !pokedex.find(
        (pokemonInPokedex) => pokemonInList.name === pokemonInPokedex.name
      )
     );

    //Essa função vai renderizar os pokemons na tela inicial, e vai mandar por props ao componente Card as informações: key, pokemonUrl e addToPokedex
     const PokelistFiltrada = filteredPokelist().map((pokemon) => (
      <Card
        key={pokemon.url}
        pokemonUrl={pokemon.url}
        addToPokedex={addToPokedex}          
      />
      
    ))
    
  

   //======================================================================================//
        

      const context = {
        pokelist:pokelist,
        pokedex:pokedex,
        addToPokedex:addToPokedex,
        removeFromPokedex:removeFromPokedex,
        filteredPokelist:filteredPokelist,
        PokelistFiltrada:PokelistFiltrada,
        
      }

    return(
        <ContextoGlobal.Provider value={context}>
            {props.children}
        </ContextoGlobal.Provider>
    )
};