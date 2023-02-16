import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import { BASE_URL } from "../../constants/url"
import Header from "../../components/Header/Header"
import { Container, H3, Section, DivImg1, DivImg2, ImgSprite, DivStats, DivMoves, DivInfo, Num, Nome, ImgPoke, Pokebola, PokeContainer } from "./Detalhespokemon.styled"
import PokeBola from '../../img/pokebola.png'
import { getColors } from "../../utils/ReturnCardColor"
import ProgressBar from "../../components/ProgressBar/ProgressBar"


export default function DetalhesPokemon(){
    const [detalhes, setDetalhes] = useState({})
    //console.log(detalhes.name[0].toUpperCase() + detalhes.name.substring(1))

    const{nome} = useParams()
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

    const typeName = detalhes.types?.map((type) => type.type)

    return(
        <Container>
            <Header detalhes={detalhes} />
            <H3>Detalhes</H3>
            

            <Section color={getColors(detalhes.types?.[0].type.name)}>
                <DivImg1>
                    <ImgSprite src={detalhes.sprites?.front_default}/>
                </DivImg1>
                <DivImg2>
                    <ImgSprite src={detalhes.sprites?.back_default}/>
                </DivImg2>

                <DivStats>
                    <h2>Estatisticas</h2>
                    {detalhes.stats?.map((stat) => {
                        return (
                            <>      
                              <ul>
                                 <li key={stat.stat.name}>
                                    {stat.stat.name}: {stat.base_stat} 
                                </li>
                                <ProgressBar progress={stat.base_stat}/> 
                               </ul>
                             </>
                               )   
                    })}
                </DivStats>
                    
                <DivMoves>
                    <h2>Golpes</h2>
                    {detalhes.moves?.map((golpes) => {
                        return <ul>
                        <li>
                            {golpes.move.name}
                        </li>
                    </ul>
                    }).slice(0, 7)}

                </DivMoves>

                <DivInfo>
                    <Num>#0{detalhes.id}</Num>
                    <Nome>{detalhes.name}</Nome>
                    {typeName?.map((type) => 
                        <img src={`../${type.name}.png`} key={type.name}/>
                    )}
                   
                </DivInfo>

                <ImgPoke>
                <img src={detalhes.sprites?.other["official-artwork"].front_default} alt={detalhes.name}/>
                </ImgPoke>
                
                
                <Pokebola src={PokeBola} />
            </Section>
            
            
        </Container>
    )
};