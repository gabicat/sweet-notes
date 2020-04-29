const inputNota = document.getElementById("input-nota");

const botaoAdicionarNota = document.getElementById("botao-adicionar-nota");

inputNota.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    if (notaElemento.value) {
        const textoDaNota = notaElemento.value.trim().split(":");
    
        const caixaDasNotas = document.createElement("div");
        caixaDasNotas.classList.add("nota-unica");
    
        const removerElementoNota = document.createElement("button");
        removerElementoNota.classList.add("botao-remover-nota");
        removerElementoNota.append("x");
        removerElementoNota.addEventListener("click", () => caixaDasNotas.remove());
    
        const tituloElemento = document.createElement("h3");
        tituloElemento.innerText = textoDaNota[0];
        tituloElemento.classList.add("titulo-da-nota");
    
        const descricaoElemento = document.createElement("span");
        descricaoElemento.innerText = textoDaNota[1];
        descricaoElemento.classList.add("descricao-da-nota");
    
        const dateElem = document.createElement("span");
        dateElem.innerText = new Date().toLocaleString();
        dateElem.classList.add("data-da-nota");
    
        caixaDasNotas.appendChild(removerElementoNota);
        caixaDasNotas.appendChild(tituloElemento);
        caixaDasNotas.appendChild(descricaoElemento);
        caixaDasNotas.appendChild(dateElem);
    
        const notaUnica = caixaDasNotas;
    
        notaElemento.value = "";
    
        const caixaDeNotas = document.querySelector(".caixa-das-notas");
        caixaDeNotas.appendChild(notaUnica);
      }
  }
});

botaoAdicionarNota.addEventListener("click", function () {
  const notaElemento = document.getElementById("input-nota");

  if (notaElemento.value) {
    const textoDaNota = notaElemento.value.trim().split(":");

    const caixaDasNotas = document.createElement("div");
    caixaDasNotas.classList.add("nota-unica");

    const removerElementoNota = document.createElement("button");
    removerElementoNota.classList.add("botao-remover-nota");
    removerElementoNota.append("x");
    removerElementoNota.addEventListener("click", () => caixaDasNotas.remove());

    const tituloElemento = document.createElement("h3");
    tituloElemento.innerText = textoDaNota[0];
    tituloElemento.classList.add("titulo-da-nota");

    const descricaoElemento = document.createElement("span");
    descricaoElemento.innerText = textoDaNota[1];
    descricaoElemento.classList.add("descricao-da-nota");

    const dateElem = document.createElement("span");
    dateElem.innerText = new Date().toLocaleString();
    dateElem.classList.add("data-da-nota");

    caixaDasNotas.appendChild(removerElementoNota);
    caixaDasNotas.appendChild(tituloElemento);
    caixaDasNotas.appendChild(descricaoElemento);
    caixaDasNotas.appendChild(dateElem);

    const notaUnica = caixaDasNotas;

    notaElemento.value = "";

    const caixaDeNotas = document.querySelector(".caixa-das-notas");
    caixaDeNotas.appendChild(notaUnica);
  }
});

const botaoRemoverTodasNotas = document.getElementById("botao-remover-todas-notas");
botaoRemoverTodasNotas.addEventListener("click", function () {
  const todasNotas = document.querySelectorAll(".nota-unica");

  if (todasNotas.length > 0) return todasNotas.forEach((nota) => nota.remove());
});
