import React from "react";
import PokemonCard from '../../components/PokemonCard/PokemonCard'
import { Container } from "./PokemonsListStyle";

export default function PokemonsListPage(){
    return(
        <Container>

        {/* <p>PokemonListPage</p> */}
        <PokemonCard/>
        <PokemonCard/>
        <PokemonCard/>
        <PokemonCard/>
        <PokemonCard/>
        <PokemonCard/>
        <PokemonCard/>
        <PokemonCard/>
        <PokemonCard/>
        
        </Container>
    )
};