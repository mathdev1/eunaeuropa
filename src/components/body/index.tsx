
import ImgMulherbandeira from '~/media/mulherbandeira.webp?jsx'; import { component$ } from "@builder.io/qwik";

export default component$(() => {
    return (

        <div class="bodytexto containerimagem">

            <div class="paimulherbandeira">
               
                <div class="textoinfo containercolumn">
                    <div class="textoinfo">
                        <h1>Cuidamos do seu processo de
                            cidadania italiana de ponta a
                            ponta de maneira segura e
                            transparente.</h1>
                        <p>Para você que não sabe por onde começar, não tem tempo de lidar com toda a burocracia do processo e quer fazer tudo sem sair do país, <strong>a assessoria da Eu Na Europa vai fazer tudo por você.</strong></p>
                    </div>
                    <a class='botaocidadania removestylelink' href="#cidadania">QUERO MINHA CIDADANIA ITALIANA</a>
                </div>
            </div>
            <div class="mulherbandeira">
            <img src='../mulherbandeira.webp' style={{objectFit:'contain'}} width="623" height="566"/>
            </div>
        </div>
    )
})