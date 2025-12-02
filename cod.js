// Só roda o código depois que todo o HTML estiver carregado
document.addEventListener("DOMContentLoaded", () => {

    // Pega a div onde o botão de favoritar aparece
    const favDiv = document.querySelector(".favoritar__");

    // Função que atualiza o botão conforme o estado salvo
    const atualizar = () => {

        // Verifica se o item salvo no localStorage é "true"
        const estado = localStorage.getItem("favorito") === "true";

        // Troca o HTML do botão conforme o estado
        favDiv.innerHTML = estado
            ? `
                <!-- Se estiver favoritado -->
                <a class="favoritado" href="#">
                    <i class="bi bi-heart-fill"></i> Favoritado
                </a>
            `
            : `
                <!-- Se NÃO estiver favoritado -->
                <a class="favoritar-btn" href="#">
                    <i class="bi bi-heart"></i> Favoritar
                </a>
            `;
    };

    // Atualiza o estado do botão assim que a página carregar
    atualizar();

    // Detecta clique no botão
    favDiv.addEventListener("click", (e) => {

        // Evita que o link recarregue a página
        e.preventDefault();

        // Lê o estado atual
        const estadoAtual = localStorage.getItem("favorito") === "true";

        // Salva o oposto (true vira false, false vira true)
        localStorage.setItem("favorito", (!estadoAtual).toString());

        // Atualiza o botão na tela
        atualizar();
    });
});