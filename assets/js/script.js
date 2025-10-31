// Seleciona os elementos

const botao = document.getElementById("botao");
const titulo = document.getElementById("titulo"); 
const body = document.body; 

// Adiciona o evento de clique

botao.addEventListener("click", () => {
    // Verifica se o modo atual é claro
    if (body.classList.contains("claro")) {
        body.classList.replace("claro", "escuro");
        titulo.textContent = "Modo Escuro 🌜"; 
        botao.textContent = " Ativar modo claro";
    } else {
        body.classList.replace("escuro", "claro"); 
            titulo.textContent = "Modo Claro 🌞";
            botao.textContent = "Ativar modo escuro";
    }
}); 

