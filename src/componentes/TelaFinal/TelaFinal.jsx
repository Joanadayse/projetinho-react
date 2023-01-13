import { tela } from "../../uteis/Uteis";
import {Div, Titulo, Button} from "./style"

function TelaFinal(props){
    return (
        <Div>
            <Titulo>Obrigada pela compra, volte sempre!!!</Titulo>
            <Button onClick={()=>props.mudarTela(tela.telaInicial)}>Voltar a home</Button>
        </Div>
    )
}

export default TelaFinal;