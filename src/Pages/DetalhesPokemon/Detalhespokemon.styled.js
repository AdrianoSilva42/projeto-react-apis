import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    padding-top: 100px;
    padding-bottom: 90px;
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
    background-color: greenyellow;

    position: relative;
    bottom: 8%;

    width:1200px ;
    height: 540px;
    border-radius: 4%;
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

   ul{
    position: relative;
    top: 12%;
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

    ul{
    position: relative;
    top: 16%;
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
    background-color: blueviolet;

    position: relative;
    bottom: 271%;
    left: 55%;

    width: 20%;
    height: 20%;
`;