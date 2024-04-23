
import ImgCiberSeguranca from '~/media/ciber-seguranca.png?jsx';
import ImgPassaporte from '~/media/passaporte.png?jsx';
import ImgValor from '~/media/valor.png?jsx';
import ImgEquipeeunaeuropa from '~/media/equipeeunaeuropa.webp?jsx';
import Imgequipeeunaeuropa from '~/media/equipeeunaeuropa.webp?jsx'; import { component$ } from "@builder.io/qwik";





export default component$(() => {
    return (


        <div class="containerazul">

            <div class="azulbackground">
            <div class="brancobackground">
                        <h1>Assessoria pós reconhecimento</h1>
                        <p>Após a conclusão do seu processo de reconhecimento da cidadania italiana, <strong>auxiliamos você na obtenção do seu documento</strong> e também na sua inscrição no AIRE Italiano.</p>
                        <div class="buttonposicao">
                            <button class="falarespecialistabotao removestylelink">FALAR COM UM ESPECIALISTA</button>
                        </div>
                    </div>
                <div class="equipeeunaeuropa">
                    
                    
                    <div class="textoespecialistas" id="sobre">

                        <p>Sobre a Eu Na Europa</p>
                        <h1>Somos especialistas em cidadania italiana</h1>
                        <p1>Nascemos para dar ao nosso cliente uma assessoria imperiosamente completo no Brasil e na Europa, com a finalidade de torná-lo um cidadão europeu.</p1>
                        <p2>Concretizando assim um objetivo mundial pela busca de qualidade de vida no que diz respeito à saúde, educação, segurança, cultura dentre outros fatores essenciais.</p2>
                        <p3>Formamos uma equipe de profissionais com vasto conhecimento e excelência na prestação de serviços.</p3>
                        <p4>Não tratamos o objetivo de cada cliente em ser um cidadão europeu como um sonho, mas sim como uma realidade próxima!</p4>

                    </div>
                    <ImgEquipeeunaeuropa style={{width:'500px',objectFit:'contain'}}/>
                </div>









            </div>
            <div class="containerbranco">
               <div class="containerprocessos">
                <ImgPassaporte />
                <p><strong>100% dos processos</strong></p>
                <p4>aprovados</p4>
                </div>
                <div class="containerexclusividade">
                    <ImgValor />
                <p1><strong>Exclusividade em todo</strong>
                    </p1>
                    
                    <p5>atendimento</p5>
                    </div>
                    <div class="containerseguranca">
                        <ImgCiberSeguranca />
                <p2><strong>Segurança durante</strong>
                    </p2>
                    <p6>todo o processo</p6>
                    </div>
                    <div class="containerexperiencia">
                        <img src='../aviao-1.png' width="37" height="37"/>
                <p3><strong>+ de 5 anos</strong>
                    </p3>
                    <p7>de experiência</p7>
                    </div>
            </div>

           
                <div class="contatoespecialistas">
                    <div class="quadradobandeira">
                        
                        <div class="textobandeira">
                        <h1>Fale com um de nossos especialistas e deixe a Eu Na Europa cuidar de todo o seu processo</h1>
                        <p>Faça seu orçamento agora mesmo e descubra qual a forma mais rápida e segura de conseguir a sua cidadania italiana.</p>
                        

                        </div>
                        <a class='botaocidadania removestylelink' href="#cidadania">QUERO MINHA CIDADANIA ITALIANA</a>
                    </div>
                </div>
            </div>

      

    )
})