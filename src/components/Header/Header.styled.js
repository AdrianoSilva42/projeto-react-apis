import styled from "styled-components";



export const Container = styled.header`
  position: relative;
  width: 100%;
  height: 120px;
  left: 0px;
  bottom: 100px;

  background: #FFFFFF;
`;

export const Button1 = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 4px;

  position: relative;
  width: 18%;
  height: 50%;
  left: 78%;
  bottom: 60%;

  background: #33A4F5;
  border-radius: 8px;
`;

export const P1 = styled.p`
  width: 106px;
  height: 36px;

  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;

  /* identical to box height */

  color: #FFFFFF;


  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const Img = styled.img`
  position: relative ;
  width: 20vw;
  height: 15vh;
  left: 35%;
  top: 2.5%;
  

`;

export const Button2 = styled.button`
  position: relative;
  width: 30%;
  height: 36px;

  right: 25%;
  bottom: 20%;
  
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  

  /* identical to box height */
  text-decoration-line: underline;
  background: none;
  border: none;

  color: #1A1A1A;

`;

export const RemoveButton = styled.button`
      position: relative;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      //padding: 2rem;

      width: 30%;
      height: 50px;

      bottom: 80%;
      left: 70%;

      background: #FF6262;
      border-radius: 8px;
      border: none;


      color: white;
      font-style: normal;
      font-weight: 800;
      font-size: 18px;
      //line-height: 24px;

      /* Inside auto layout */
      flex: none;
      order: 1;
      flex-grow: 0;

      :active{
        background-color: white; /* Cor de fundo ao pressionar */
        color: #FF6262;
        box-shadow: 0 5px #666; /* Sombra */
        transform: translateY(4px)
      }
`;

export const AddButton = styled.button`
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      //padding: 4px 10px;

      position: relative;
      width: 30%;
      height: 50px;
      
      left: 70%;
      bottom: 78%;

      background: #33A4F5;
      border-radius: 8px;

      p{
      
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 24px;

        color: #FFFFFF;
      }
`;
