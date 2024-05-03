
import ImgLeilaromano from '~/media/leilaromano.png?jsx';
import ImgGiuliafontana from '~/media/giuliafontana.png?jsx';
import ImgAlexandredeluca from '~/media/alexandredeluca.png?jsx';
import ImgImagemfundo from '~/media/imagemfundo.webp?jsx'; import { component$, useStyles$ } from "@builder.io/qwik";
import { Slider } from "qwik-slider";

export default component$(() => {
    const sliderSettings = {
        scrollSpeed: 5,
        showScrollbar: false,
        autoScroll: false,
       
      }
    return (

        <div class="containerpai">
            <div class="citycontainer citybackground">
                <div class="cardcontainer">
                    <div class="headercontainer">
                        <p><svg xmlns="http://www.w3.org/2000/svg"  width="30px" height="20px" viewBox="0 0 640 512"><path d="M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z"fill="#b60e0e"/></svg>Nossos clientes</p>
                        <h1>Pessoas que transformaram em realidade o sonho de ser um cidadão italiano</h1>
                    </div>

                    <div class="slidercontainer">
                    <Slider {...sliderSettings}>
                    <div id="depoimentos" class="carrosselcontainer">
                        <ImgLeilaromano alt="image1"></ImgLeilaromano>
                        <ImgGiuliafontana alt="image 2"></ImgGiuliafontana>
                        <ImgAlexandredeluca alt="mage 3"></ImgAlexandredeluca>
                    </div>
                       
                    </Slider>
                    </div>
                    
                    <div class="fundoquemtemdireito">
                        
                        <div id="direitos" class="containertextodireito">
                       
                            <p><svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 24 24" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM12 7.75C11.3787 7.75 10.875 8.25368 10.875 8.875C10.875 9.28921 10.5392 9.625 10.125 9.625C9.71079 9.625 9.375 9.28921 9.375 8.875C9.375 7.42525 10.5503 6.25 12 6.25C13.4497 6.25 14.625 7.42525 14.625 8.875C14.625 9.58584 14.3415 10.232 13.883 10.704C13.7907 10.7989 13.7027 10.8869 13.6187 10.9708C13.4029 11.1864 13.2138 11.3753 13.0479 11.5885C12.8289 11.8699 12.75 12.0768 12.75 12.25V13C12.75 13.4142 12.4142 13.75 12 13.75C11.5858 13.75 11.25 13.4142 11.25 13V12.25C11.25 11.5948 11.555 11.0644 11.8642 10.6672C12.0929 10.3733 12.3804 10.0863 12.6138 9.85346C12.6842 9.78321 12.7496 9.71789 12.807 9.65877C13.0046 9.45543 13.125 9.18004 13.125 8.875C13.125 8.25368 12.6213 7.75 12 7.75ZM12 17C12.5523 17 13 16.5523 13 16C13 15.4477 12.5523 15 12 15C11.4477 15 11 15.4477 11 16C11 16.5523 11.4477 17 12 17Z" fill="#b60e0e"/>
</svg>Quem tem direito?</p>
                            <h1>Todo descendente de um cidadão italiano tem o direito à cidadania, sem limite de gerações!</h1>
                            <p1>Sendo assim, todo e qualquer descendente de italiano que quer ser reconhecido, precisará apenas verificar a árvore genealógica da sua família e buscar as certidões que comprovam a sua origem.</p1>
                            <p2>A Eu Na Europa avalia <strong>cada caso individualmente</strong> e decide qual a melhor opção para obter o reconhecimento da sua cidadania.</p2>
                        </div>
                        <div class="imagemfundo">
                            <ImgImagemfundo />
                        </div>
                    </div>

                </div>



            </div>

            <div class="containercards">
                <div class="cardbaixo" id="vantagens" >
                    <p> <img src='../5-estrelas.png' width={29} height={29}/>Vantagens de ser um cidadão italiano</p>
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