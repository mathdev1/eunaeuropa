
import ImgDocumentosGoogle from '~/media/documentos-google.png?jsx'; import { component$ } from "@builder.io/qwik";

export default component$(() => {
    return (
        <div id="etapas" class="bandeiracontainer">

            <div class="containerhero">
                <div class="containerimagemdoc">



                    <ImgDocumentosGoogle style={{ width: '100px', objectFit: 'contain' }} />
                    <div class="containerbusca">
                        <p><strong>Busca pela documentação parental</strong></p>
                        <p4>Vamos atrás de todos os documentos necessários da sua linha de descendência.</p4>
                    </div>
                </div>
            </div>
            <div class="containerhero">
                <div class="containerselo">
                    <img src='../marca-de-verificacao.png' height={49} width={49} style={{objectFit:'contain'}}/>
                <div class="containersemsurpresas">
                    <p1><strong>Sem surpresas no meio do caminho</strong></p1>
                        <p5>Apresentamos para você todo o plano de cidadania antes de iniciar o processo junto com seu orçamento personalizado</p5>
                </div>
                </div>
            </div>
            <div class="containerhero">
                <div class="containerimagemcasa">
                    <img src='../casa.png' height={60} width={60} style={{objectFit:'contain'}}/>
                <div class="containerlar">
                <p2><strong>Faça tudo do conforto do seu lar</strong></p2>
                    <p6>Cuidamos de todos os passos necessários para sua cidadania sem você sair de casa.</p6>
                    </div>
                    </div>

            </div>
            <div class="containerhero">
                <div class="containerimagemduvidas">
                    <img src='../pessoas-copy.png'  height={49} width={49} style={{objectFit:'contain'}}/>
                    <div class="containerduvidas">
                <p3><strong>Equipe disponível para dúvidas</strong></p3>
                    <p7>Estaremos sempre à sua disposição para acompanhar seu processo e tirar todas as suas dúvidas que surgirem.</p7>
                    </div>
                    </div>
            </div>



        </div>

    )
})