
import { component$ } from "@builder.io/qwik";
import CardFlag from '../cardFlag';

export default component$(() => {
    return (
        <div id="etapas" class="bandeiracontainer">
             <CardFlag imgLink='../documentos-google.png' title='Busca pela documentação parental' description="Vamos atrás de todos os documentos necessários da sua linha de descendência."/> 
             <CardFlag imgLink='../marca-de-verificacao.png' title='Sem surpresas no meio do caminho' description="Apresentamos para você todo o plano de cidadania antes de iniciar o processo junto com seu orçamento personalizado"/> 
             <CardFlag imgLink='../casa.png' title='Faça tudo do conforto do seu lar' description="Cuidamos de todos os passos necessários para sua cidadania sem você sair de casa."/> 
             <CardFlag imgLink='../pessoas-copy.png' title='Equipe disponível para dúvidas' description="Estaremos sempre à sua disposição para acompanhar seu processo e tirar todas as suas dúvidas que surgirem."/> 
        </div>
    )
})