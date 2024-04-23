
import ImgLogoSiteNegativa from '~/media/logo_site_negativa.png?jsx';import { component$ } from "@builder.io/qwik";

export default component$(()=>{
    return (
        <div class="footer">

            <ImgLogoSiteNegativa  style={{width:'250px',objectFit:'contain'}}/>
            
            <div class="escritoriosp">
            <p>Escritório São Paulo</p>
            <p2>Escritório Corporativo Av. Copacabana Empresarial 18 do Forte, Alphaville – SP – 06472-001</p2>
            </div>
            <div class="escritoriopt">
                <p>Escritório Portugal</p>
                <p1>R. Largo Barão S. Martinho, 13 3º Andar – Sala 2 – Braga – Porturgal/PT</p1>
                </div>
                <div class="textocontato">
                    <p>Contato</p>
                    <p1>(11)22948024</p1>
                </div>
                <div class="textoemail">
                    <p>E-mail</p>
                    <p1>contato@eunaeuropacidadania.com.br</p1>
                </div>
                </div>
            
            
            
    
    )
})