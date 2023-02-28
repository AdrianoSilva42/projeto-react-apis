import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import PokedexPage from "../pages/PokedexPage/PokedexPage";
import DetalhesPokemon from "../pages/DetalhesPokemon/DetalhesPokemon";

function Router() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/pokedex" element={<PokedexPage/>}/>
        <Route path="/detalhesPokemon/:nome" element={<DetalhesPokemon/>} />
        <Route path="*" element={<NotFoundPage />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
