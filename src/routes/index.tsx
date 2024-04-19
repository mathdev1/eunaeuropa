import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Header from "~/components/header";
import Hero from "~/components/hero";
import Body from "~/components/body";
import Card from "~/components/card";
import Sections from "~/components/sections";
import Footer from "~/components/footer";

export default component$(() => {
  return (
    <>


<Header/>
<Body/>
<div class="containerbandeiratexto">
<div class="mainsection">
  <div class="textomain">
  <p2>Por que tirar sua cidadania com a gente?</p2>
  <h1>Tenha um parceiro estratégico atuando no seu processo</h1>
  <p>A cidadania italiana é um direito seu, mas você já deve saber que é um processo que exige bastante atenção e tempo para executar.</p>
  <p>A Eu Na Europa conta com um time preparado para te auxiliar em todas as etapas do processo.</p>
  <a href="#contato" class="contact-button removestylelink">QUERO MINHA CIDADANIA ITALIANA</a>
  </div>
  <Hero/>
  </div>
  </div>
  
  
  <Card/>
  <Sections/>
  <Footer/>
  
  



  

      

    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
