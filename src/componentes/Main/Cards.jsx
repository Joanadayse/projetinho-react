import { useState } from "react"
import { Item } from "./Item"

export function Cards({onibus,addCarrinho}){
    const [quant,setQuant]=useState(1)

    const adicionaCarrinho=()=>{
       
         const item={
                id:onibus.id,
                imagens:onibus.imagem,
                nome:onibus.name,
                preco:onibus.valor,
                total:onibus.valor * quant,
                quant:quant
            
            }

            addCarrinho(item)
 
  } 

    return(
       <Item onibus={onibus} adicionaCarrinho={adicionaCarrinho}/>
    )
    }