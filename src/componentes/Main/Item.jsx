
export function Item ({onibus, adicionaCarrinho}){

    return(
        <div className="todos-cards">   
           <img src={onibus.imagem} alt=""/>
         <ul>  
          <li>{onibus.name}</li> 
             <li>Ano:{onibus.ano}</li>
             <li>valor:{onibus.valor}</li>
             <li><button className="botao" onClick={adicionaCarrinho}>adicionar no carrinho</button></li>
         </ul>
      </div>   
    )
}