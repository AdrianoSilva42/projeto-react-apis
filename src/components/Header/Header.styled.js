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
  padding: 4px 10px;

  position: relative;
  width: 18%;
  height: 50%;
  left: 78%;
  top:20%;

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
  position: absolute;
  width: 210px;
  height: 90px;
  left: 35%;
  top: 2.5%;

`;

export const Button2 = styled.button`
  position: absolute;
  width: 30%;
  height: 36px;
  top: 40px;

  
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
      padding: 2rem;

      width: 18%;
      height: 50%;

      top: 20%;
      left: 80%;

      background: #FF6262;
      border-radius: 8px;
      border: none;


      color: white;
      font-style: normal;
      font-weight: 800;
      font-size: 18px;
      line-height: 24px;

      /* Inside auto layout */
      flex: none;
      order: 1;
      flex-grow: 0;
`;
