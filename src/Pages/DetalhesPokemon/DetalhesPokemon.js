import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import { BASE_URL } from "../../constants/url"
import Header from "../../components/Header/Header"
import { Container, H3, Section, DivImg1, DivImg2, ImgSprite, DivStats, DivMoves, DivInfo } from "./Detalhespokemon.styled"


export default function DetalhesPokemon(){
    const [detalhes, setDetalhes] = useState({})
    //console.log(detalhes)

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

            <Section>
                <DivImg1>
                    <ImgSprite src={detalhes.sprites?.front_default}/>
                </DivImg1>
                <DivImg2>
                    <ImgSprite src={detalhes.sprites?.back_default}/>
                </DivImg2>

                <DivStats>
                    {detalhes.stats?.map((stat) => {
                        return <ul>
                                 <li key={stat.stat.name}>
                                    {stat.stat.name}: {stat.base_stat}
                                </li>
                               </ul>        
                    })}
                </DivStats>
                    
                <DivMoves>

                    {detalhes.moves?.map((golpes) => {
                        return <ul>
                        <li>
                            {golpes.move.name}
                        </li>
                    </ul>
                    }).slice(0, 7)}

                </DivMoves>

                <DivInfo>
                    <p>#0{detalhes.id}</p>
                    <p>{detalhes.name}</p>
                    {typeName?.map((type) => 
                        <img src={`${type.name}.png`} key={type.name}/>
                    )}

                </DivInfo>
               
            </Section>
            
            
        </Container>
    )
};