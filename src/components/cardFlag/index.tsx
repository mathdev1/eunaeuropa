import { component$ } from "@builder.io/qwik";
import './styles.css'

export default component$((props: { title: string; description: string, imgLink: string }) => {

    return (
        <div class="container-mobile">
            <div class="container-hero">
                <div class="container-imagem-doc">
                    <img src={props.imgLink} width={100} height={40} style={{ objectFit: "contain" }} />
                    <div class="container-busca">
                        <p><strong>{props.title}</strong></p>
                        <p4>{props.description}</p4>
                    </div>
                </div>
            </div>
        </div>
    )
})