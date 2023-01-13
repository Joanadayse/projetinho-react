import React from "react";
import { Cards } from "./Cards";
import {  Main1 } from "./styled";
import { tela } from "../../uteis/Uteis";

export function Main({ name, ordem , addCarrinho,setCarrinho , onibus , maiorPreco, menorPreco, mudarTela }) {
  
function crescente (a ,b){

  if(a.valor<b.valor) return -1;
  if(a.valor>b.valor) return 1;
  return 0;

}

function decrescente (a ,b){

  if(a.valor>b.valor) return -1;
  if(a.valor<b.valor) return 1;
  return 0;

}

function ordenarPorId(a,b){
  return a.id - b.id;

}

function ordenar(a,b){
  switch (ordem) {
    case "crescente":
      return crescente(a,b);

    case "decrescente":
      return decrescente(a,b);
  
    default:
      return ordenarPorId(a,b)
     
  }
}

  return (

    <Main1>

      {onibus
      
        .sort(ordenar)    

        .filter((onibus) => {
          return onibus.name.toLowerCase().includes(name.toLowerCase());
        })

        .filter((onibus)=>{ 
          return (onibus.valor >= menorPreco) 
        })
        
        .filter((onibus)=>{
          if(maiorPreco){
            return onibus.valor <= maiorPreco
          }else{
            return onibus.valor
          }
        })

        .map((onibus,index) => {
          return (
            <Cards key={index}
            setCarrinho={setCarrinho}
            onibus={onibus}
            addCarrinho={addCarrinho}
            />
          );
        })}
     
        <button className="butonCarrinho" onClick={()=>mudarTela(tela.telaCarrinho)}>Ir para o carrinho</button>
      
    </Main1>
  );
}

