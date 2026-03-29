const todosItens = document.querySelectorAll('.selecionar__tema');
let indiceAtivo = 0;

function atualizarAtivo(novoIndice) {
    todosItens.forEach(item => item.classList.remove('ativo'));
    todosItens[novoIndice].classList.add('ativo');
    indiceAtivo = novoIndice;
}

document.addEventListener('keydown', (seta) => {
    if (seta.key === "ArrowDown") {
        let proximo = (indiceAtivo + 1) % todosItens.length;
        atualizarAtivo(proximo);
    }
    if (seta.key === "ArrowUp") {
        let anterior = (indiceAtivo - 1 + todosItens.length) % todosItens.length;
        atualizarAtivo(anterior);
    }
});

function abreCalculadora() {
    const temas = ["crash", "aku", "neo", "ratcicle"]
    localStorage.setItem('tema', temas[indiceAtivo]);
    window.location.href = "../calculadora/calculadora.html"
}

html = document.documentElement;

html.addEventListener('keydown', (enter)=>{
    if(enter.key === 'Enter'){
        abreCalculadora()
    }
})

