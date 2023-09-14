import styles from "./SobreMim.module.css";

import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import fotoSobreMim from "assets/perfil.svg";

export default function SobreMim() {
    return (
        <PostModelo
            fotoCapa={fotoCapa}
            titulo="Sobre mim"
        >
            <h3 className={styles.subtitulo}>
                Olá, eu sou a Thalía!
            </h3>

            <img
                src={fotoSobreMim}
                alt="Foto da Thalía sorrindo"
                className={styles.fotoSobreMim}
            />

            <p className={styles.paragrafo}>
                Profissional graduanda em Análise e Desenvolvimento de Sistemas, à procura de uma oportunidade onde eu possa aprimorar e expandir meus conhecimentos, visando sempre uma boa qualificação profissional. 
            </p>
            <p className={styles.paragrafo}>
                Conhecimento técnico acadêmico em lógica de programação, programação orientada a objetos, banco de dados, engenharia de software, web, gerenciamento de projetos, empreendedorismo, inovação e economia.
            </p>
            <p className={styles.paragrafo}>
                Vivência no desenvolvimento de projetos focados em páginas web, sistemas de e-commerce, utilizando as linguagens WordPress, HTML, CSS, NodeJS, Javascript, de modo a assegurar conformidade nos processos e excelência em todos os níveis.
            </p>
            <p className={styles.paragrafo}>
                Profissional altamente capacitada para trabalhar em equipe, dedicada às funções e focada em resultados. Organizada, responsável e flexível.
            </p>
        </PostModelo>
    )
}