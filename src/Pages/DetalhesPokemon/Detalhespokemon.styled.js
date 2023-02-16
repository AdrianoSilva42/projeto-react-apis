import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    padding-top: 100px;
    padding-bottom: 80px;
    width: 100%;
    height: 100%;
    margin: auto;

    background: #5E5E5E;

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    row-gap: 4rem;
    column-gap: 2%;
`;

export const H3 = styled.h3`
    position: absolute;
    width: 50%;
    height: 20px;
    left: 40px;
    padding-top: 40px;

    
    font-style: normal;
    font-weight: 800;
    font-size: 40px;
  
    color: #FFFFFF;
`;

export const Section = styled.section`
    background-color: ${(props) => props.color};

    position: relative;
    bottom: 38%;

    width:1200px ;
    height: 540px;
    border-radius: 37.8857px;
    padding: 2%;


`;

export const DivImg1 = styled.div`
    background-color: white;
    width: 20%;
    height: 48%;
    border-radius: 4%;

    position: relative;
    left: 1%;
`;

export const DivImg2 = styled.div`
    background-color: white;
    width: 20%;
    height: 48%;
    border-radius: 4%;

    position: relative;
    left: 1%;
    top: 4%;
`;

export const ImgSprite = styled.img`
    width: 100%;
    height: 100%;
    margin: auto;
`;

export const DivStats = styled.div`
   background-color: white;
   width: 30%;
   height: 100%;
   border-radius: 4%;

   position: relative;
   left: 23%;
   bottom: 96%;

   h2{
    position: relative;
    top: 5%;
    left: 5%;

    font-style: normal;
    font-weight: 800;
    font-size: 24px;
   }

   ul{
    position: relative;
    top: 10%;
    left: 5%;
    display: flex;
    flex-direction: column;
    //background-color: blueviolet;
    
   }

   li{
    position: relative;
    list-style-type: none;
    margin-top: 8%;
    padding-left: 2%;
    
   }
   
`;

export const DivMoves = styled.div`
    background-color: white;

    position: relative;
    bottom: 171%;

    left: 55%;
    width: 20%;
    height: 75% ;
    border-radius: 4%;

    h2{
    position: relative;
    top: 5%;
    left: 5%;

    font-style: normal;
    font-weight: 800;
    font-size: 24px;
   }

    ul{
    position: relative;
    top: 10%;
    left: 5%;
    display: flex;
    flex-direction: column;
    //background-color: blueviolet;
    
   }

   li{
    position: relative;
    list-style-type: none;
    margin-top: 8%;
    padding-left: 2%;
    
   }
`;

export const DivInfo = styled.div`
    position: relative;
    bottom: 271%;
    left: 55%;
    

    width: 20%;
    height: 20%;

    img{
    position: relative;
    width: 40%;
    height: 35%;
    top: 40%;
    margin-right: 10%;
  };
  
`;

export const Num = styled.h3`
     // position: relative;
      width: 10%;
      height: 4.5vh;
      left: -40%;
      top: -110%;

     
      font-style: normal;
      font-weight: 750;
      font-size: 120%;
      line-height: 19px;

      color: #FFFFFF;
`;

export const Nome = styled.h2`
      position: relative;
      width: 20%;
      height: 0vh;
      background-color: black;
      bottom: 15%;

      

      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      font-style: normal;
      font-weight: 700;
      font-size: 250%;
      line-height: 39px;

      color: #FFFFFF;
`;

export const ImgPoke = styled.div`
    position: relative;
    bottom: 324%;
    left: 75%;

    width: 25%;
    height: 40%;

    img{
        width: 95%;
        height: 140%;
    }
`;

export const Pokebola = styled.img`
    position:  relative;
    left: 45%;
    bottom: 336%;

    width: 58%;
    height: 120%;

    opacity: 0.77;
    
`;

