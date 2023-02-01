import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import { BASE_URL } from "../../constants/url"
import Header from "../../components/Header/Header"
import { Container } from "./Detalhespokemon.styled"


export default function DetalhesPokemon(){
    const{nome} = useParams()
    
  

    const [detalhes, setDetalhes] = useState({})
    console.log(detalhes)

    useEffect(() => {
        buscarDetalhes()
    },[])

    const buscarDetalhes = async () => {
        try{
            const res = await axios.get(`${BASE_URL}/${nome}`)
            setDetalhes(res.data)
        }
        catch(e){
            console.log(e)
        }
    }

   
    return(
        <Container>
            <Header/>
            <h1>Pagina de Detalhes</h1>
            <img src={detalhes.sprites?.front_default}/>
            <p>Nome: {detalhes.name}</p>
           
        </Container>
    )
};