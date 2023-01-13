import styled from "styled-components";

export const Main1= styled.main`
 display: grid;
  justify-items: center;
  width: 80%;
  margin: 0 auto;
  grid-template-columns: repeat(3,1fr); 

      @media (min-width: 480px) {
    grid-template-columns: 1fr 1fr;
    gap: 50px;
  }

      

 .todos-cards{
  display: grid;
  margin: 10%;
  transform-style: preserve-3d;
    border-radius: 20px;
    filter: drop-shadow(0 0 0.4em #6795BC);
    :hover{
      -webkit-transform: scale(1.1);
      -moz-transform: scale(1.1);
      -o-transform: scale(1.1);
      -ms-transform: scale(1.1);
      transform: scale(1.1);
      }
 }

 .todos-cards> img{
  grid-column: 1;
  grid-row: 1/3;
   width:100%;
  height:100%; 
  margin: 0 auto;
  align-items: center;


 }

 .todos-cards> ul{
  background: rgba(0 ,0 , 0, 0.6);
    padding: 2px;
    color: white;
    grid-column: 1;
    grid-row: 2;
    list-style: none;
    margin-bottom: -10px;   
   
 }

 .todos-cards >ul >li{
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  text-align: center;

 }

 .carrinho{
  grid-row: 1 /4; 
 flex-basis: 200px;
 border-right-style: solid;
 border-right-width: thin;
 margin: 5%;
  

}

.butonCarrinho{
  background-color: white;
    border-radius: 8px;
    cursor: pointer;
    width: 200px;
    padding: 10px;
    :hover{
        background-color: black;
        color: white;
    }

 margin-bottom: 10%;
 margin-left: 200%;

 @media (min-width: 480px) {
  margin-left: 100%;
 
  }


  
}

.botao{

  background-color: white;
    border-radius: 8px;
    cursor: pointer;
    width: 200px;
    padding: 10px;
    :hover{
        background-color: black;
        color: white;
    }

}




`


