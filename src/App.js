import React, { useEffect } from "react";
import { Header } from "./componentes/Header/Header";
import { Filtro } from "./componentes/Filtro/Filtro";
import { Main } from "./componentes/Main/Main";
import onibus from "./onibus.json"

import { useState } from "react";
import { Carrinho } from "./componentes/Carrinho/Carrinho";

import TelaFinal from "./componentes/TelaFinal/TelaFinal";
import { tela} from "./uteis/Uteis"

export default function App() {
  const [name , setName]= useState("")
  const [ordem, setOrdem]=useState("")
  const [carrinho, setCarrinho]=useState([])
  const [maiorPreco, setMaiorPreco]= useState("")
  const [menorPreco, setMenorPreco]= useState("")
  const [valorCondicional, setValorCondicional] = useState(tela.telaInicial)

  // apagar produto do carrinho
  const removerOnibus = (onibus) => {
    const index = carrinho.findIndex((novoOnibus) => {
      return novoOnibus === onibus;
    });
    const onibusFilter = [...carrinho];
    onibusFilter.splice(index, 1);
    setCarrinho(onibusFilter);
 
     if(onibusFilter.length === 0){
   localStorage.removeItem("carrinho")

    }
  };

  const mudarTela = (valor) => {
    setValorCondicional(valor)
  }

  // adicionar produto ao carrinho
  function addCarrinho(item){

    carrinho.map((i)=>{
      if(i.id === item.id){
        item.quant=item.quant + i.quant
        item.total=item.total + i.total
      }
    })
    const novoCarrinho=  carrinho.filter((i)=>{
      return i.id !== item.id
    })
    setCarrinho([...novoCarrinho,item])
  }
  

  // atualizar tela e salvar dados
  useEffect(() => {
    if (carrinho.length > 0) {
      const carrinhoString = JSON.stringify(carrinho);
      localStorage.setItem('carrinho', carrinhoString)
    }   
  }, [carrinho]);
  
  useEffect(() => {
    const carrinhoBuscar = localStorage.getItem('carrinho')
    const carrinhoArray = JSON.parse(carrinhoBuscar);
    if (carrinhoArray) {
      setCarrinho(carrinhoArray);
    }
  }, []);


const renderizaTela = () => {
  switch (valorCondicional) {
    case tela.telaInicial:
    
        return (
        <>
      <Header mudarTela={mudarTela} quantCarrinho={carrinho.length} valorCondicional={valorCondicional}/>
      <Filtro name={name} setName={setName} ordem={ordem} setOrdem={setOrdem}
         onibus={onibus} setMaiorPreco={setMaiorPreco} setMenorPreco={setMenorPreco} />

        <Main name={name}
        ordem={ordem} addCarrinho={addCarrinho} setCarrinho={setCarrinho}
        carrinho={carrinho} onibus={onibus} maiorPreco={maiorPreco} menorPreco={menorPreco}mudarTela={mudarTela} />

      </>
        )
    case tela.telaCarrinho:
      return (
        <>
      <Header mudarTela={mudarTela} />
      <Carrinho carrinho={carrinho} mudarTela={mudarTela} setCarrinho={setCarrinho} removerOnibus={removerOnibus}/>
      </>
        )
    case tela.telaFinal:
      return <TelaFinal mudarTela={mudarTela}/>
    
  }
}

  return (
    
      <div >
        {/* <Header /> */}

        {/* <Filtro name={name} setName={setName} ordem={ordem} setOrdem={setOrdem}
         onibus={onibus} setMaiorPreco={setMaiorPreco} setMenorPreco={setMenorPreco} />

        <Main name={name}
        ordem={ordem} addCarrinho={addCarrinho} setCarrinho={setCarrinho}
        carrinho={carrinho} onibus={onibus} maiorPreco={maiorPreco} menorPreco={menorPreco}
       
        /> */}

        {renderizaTela()}
      </div>
      
    
  );
}
