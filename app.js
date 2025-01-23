let amigoSecreto = []; // Lista vazia de amigos secretos

function adicionarAmigo() {
  const nomeAmigo = document.getElementById('amigo').value.trim(); // Remove espaços extras

  // 4ª Verificar se o campo está vazio
  if (nomeAmigo === "") {
    alert("Por favor, digite um nome.");
    return;
  }

  // 3ª Verificar se o nome já existe na lista
  if (amigoSecreto.includes(nomeAmigo)) {
    alert("Este nome já foi adicionado.");
    return;
  }

  // Adiciona o nome à lista
  amigoSecreto.push(nomeAmigo);

  limparCampo(); // Limpa o campo de entrada
  exibirListaAmigos(); // Atualiza a lista HTML
  console.log(amigoSecreto); // 2ª Apresentar os nomes no console
}

// Atualiza a lista de amigos na interface HTML
function exibirListaAmigos() {
  const lista = document.getElementById('listaAmigos');
  lista.innerHTML = ""; // Limpa a lista existente

  // Percorre o array e adiciona cada amigo como um <li>
  amigoSecreto.forEach((amigo) => {
    const item = document.createElement("li");
    item.textContent = amigo;
    lista.appendChild(item);
  });
}

function sortearAmigo() {
  // Verificar se a lista está vazia
  if (amigoSecreto.length === 0) {
    alert("A lista está vazia. Adicione amigos antes de sortear.");
    return;
  }

  // 1ª Sortear um nome aleatório da lista
  const indiceSorteado = Math.floor(Math.random() * amigoSecreto.length);
  const nomeSorteado = amigoSecreto[indiceSorteado];

  // Exibir o nome sorteado
  const resultado = document.getElementById('resultado');
  resultado.innerHTML = `<li>O amigo sorteado é: <strong>${nomeSorteado}</strong></li>`;
}

// Função auxiliar para limpar o campo de entrada
function limparCampo() {
  const inputAmigo = document.getElementById('amigo');
  inputAmigo.value = ""; // Limpa o valor do input
}
