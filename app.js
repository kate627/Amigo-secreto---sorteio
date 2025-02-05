const listaDeAmigos = [];

function adicionarAmigo() {
    const inputAmigo = document.getElementById("amigo");
    const nomeAmigo = inputAmigo.value.trim();
    
    if (nomeAmigo !== "") {
        listaDeAmigos.push(nomeAmigo);
        atualizarListaAmigos();
        inputAmigo.value = "";
    }
}

function atualizarListaAmigos() {
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";
    
    listaDeAmigos.forEach(amigo => {
        const item = document.createElement("li");
        item.textContent = amigo;
        item.setAttribute("role", "listitem");
        listaAmigos.appendChild(item);
    });
}

function sortearAmigo() {
    if (listaDeAmigos.length === 0) {
        alert("Adicione pelo menos um amigo antes de sortear.");
        return;
    }
    
    const indiceSorteado = Math.floor(Math.random() * listaDeAmigos.length);
    const amigoSorteado = listaDeAmigos[indiceSorteado];
    
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "";
    
    const itemResultado = document.createElement("li");
    itemResultado.textContent = `Amigo sorteado: ${amigoSorteado}`;
    resultado.appendChild(itemResultado);
}

document.addEventListener("DOMContentLoaded", atualizarListaAmigos);