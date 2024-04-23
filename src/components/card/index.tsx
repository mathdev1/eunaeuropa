
import ImgImagemfundo from '~/media/imagemfundo.webp?jsx'; import { component$, useStyles$ } from "@builder.io/qwik";

export default component$(() => {
    return (

        <div class="containerpai">
            <div class="citycontainer citybackground">
                <div class="cardcontainer">
                    <div class="headercontainer">
                        <p>Nossos clientes</p>
                        <h1>Pessoas que transformaram em realidade o sonho de ser um cidadão italiano</h1>
                    </div>

                    <div id="depoimentos" class="carrosselcontainer">
                        <div class="carrosselcontainer1">
                        </div>
                        <div class="carrosselcontainer2">
                        </div>
                        <div class="carrosselcontainer3">
                        </div>
                    </div>
                    <div class="fundoquemtemdireito">
                        <div class="imagemfundo">
                            <ImgImagemfundo />
                        </div>
                        <div id="direitos" class="containertextodireito">
                            <p>Quem tem direito?</p>
                            <h1>Todo descendente de um cidadão italiano tem o direito à cidadania, sem limite de gerações!</h1>
                            <p1>Sendo assim, todo e qualquer descendente de italiano que quer ser reconhecido, precisará apenas verificar a árvore genealógica da sua família e buscar as certidões que comprovam a sua origem.</p1>
                            <p2>A Eu Na Europa avalia cada caso individualmente e decide qual a melhor opção para obter o reconhecimento da sua cidadania.</p2>
                        </div>
                    </div>

                </div>



            </div>

            <div class="containercards">
                <div class="cardbaixo" id="vantagens" >
                    <p>Vantagens de ser um cidadão italiano</p>
                </div>
                <div class="todoscards">
                    <div class="cardvermelho">
                        <h1>Você mudará sua vida após obter a cidadania italiana</h1>
                    </div>
                    <div class="cardverde">
                        <div class="textocardverde">

                            <div>
                                <p>• Trânsito livre em 187 países</p>
                            </div>

                            <div>

                                <p>• Mobilidade em mais de 32 países (incluindo EUA, Canadá e Japão)</p>
                            </div>
                            <div>
                                <p>• Acesso à saúde pública de qualidade</p>
                            </div>
                            <div>
                                <p>• Oportunidade de estudar nas melhores universidades do mundo</p>
                            </div>
                        </div>
                    </div>
                    <div class="cardverde2">
                        <div class="textocardverde2">
                        <div>
                            <p>• Facilidade de abrir empresa na Europa e nos Estados Unidos</p>
                        </div>
                        <div>
                            <p>• Novas experiências culturais</p>
                        </div>
                        <div>
                            <p>• Herança para demais gerações</p>
                        </div>
                        <div>

                            <p> • Trabalhar e viver onde sempre sonhou</p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>








    )
})