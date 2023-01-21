import React from "react";
import Header from '../../components/Header/Header'
import PokemonList from "../PokemonsListPage/PokemonsListPage";
import { Container } from "./pokedexStyle";

export default function PokedexPage(){
    return(
        <Container>

        <p>PokedexPage</p>
        <Header/>
        <PokemonList/>
        
        </Container>
    )
};