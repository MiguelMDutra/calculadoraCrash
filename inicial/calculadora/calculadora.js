function add(x) {
    if (resultado.value === '0') {
        resultado.value = ''
    }
    const operadores = ['+', '-', '*', '/']
    if (operadores.includes(x)) {
        for (let i = 0; i < operadores.length; i++) {
            if (resultado.value.endsWith(operadores[i])) {
                resultado.value = resultado.value.slice(0, -1,)
                break       //!!! dai acaba o for e executa o resultado.value +=x
            }
        }
    }

    return resultado.value += x 
}

function c() {
    resultado.value = ""
}

function ce() {
    const cezada = resultado.value.slice(0, -1)
    resultado.value = cezada

}

function porcentagem() {
    const parenteses = resultado.value
    resultado.value = 0
    resultado.value = `${parenteses}/100`
}


function igual() {
    if (resultado.value === '') {
        return
    };

    if (/\/0(?!\d)/.test(resultado.value)) {    //regex
        resultado.value = "0"
        return;
    }
    const continha = {
        operacao: resultado.value
    }

    const operadores = ['+', '-', '*', '/', ')', '(']

    if (operadores.some(op => resultado.value.includes(op))) {  // !!!!!!!!!!!!!!
        continha.operacao = resultado.value
        resultado.value = eval(resultado.value);
        if (resultado.value == 67) {
            const gif = document.querySelector(".six__seven");
            gif.style.display = "block";
        }
    } else {
        resultado.value = `${resultado.value}*2`
        continha.operacao = resultado.value
        resultado.value = eval(resultado.value);
    }

    const resultados = {
        resultado: resultado.value
    }

    historicoResultados.push(resultados);
    historicoOperacoes.push(continha);

    criaLinhaHistorico(resultados, continha);     //!!!!!!!!!!!!!!!!!!!!

    atualizarHistorico()
}

function mudaSinal() {
    if (resultado.value.startsWith("-")) {
        resultado.value = resultado.value.slice(1) //
    } else {
        resultado.value = "-" + resultado.value
    }
}

//parte historico e clique (UI)


const historicoResultados = JSON.parse(sessionStorage.getItem('historicoContas')) || []
const historicoOperacoes = JSON.parse(sessionStorage.getItem('historicoOperacao')) || []

function atualizarHistorico() {
    sessionStorage.setItem("historicoContas", JSON.stringify(historicoResultados));
    sessionStorage.setItem("historicoOperacao", JSON.stringify(historicoOperacoes));
}

function criaLinhaHistorico(resultados, continha) {
    const ul = document.querySelector(".ul__historico")

    const li = document.createElement('li')
    li.classList.add("li__historico")

    const p = document.createElement('p')
    p.textContent = `${continha.operacao}=${resultados.resultado}`


    ul.append(li)
    li.append(p)
}

function apagarHistorico() {
    const ul = document.querySelector(".ul__historico")
    ul.innerHTML = "";
    sessionStorage.clear()
    atualizarHistorico()
    resultado.value = "";
}

function historicoDisplayFunction() {
    const historicoDisplay = document.querySelector(".historico")
    if (historicoDisplay.style.display == "none") {
        historicoDisplay.style.display = "block"
    } else {
        historicoDisplay.style.display = "none"
    }
}

function tutorialDisplay() {
    const tutorial = document.querySelector('.como__usar')
    if (tutorial.style.display == "none") {
        tutorial.style.display = "block"
    } else {
        tutorial.style.display = "none"
    }

}

const html = document.documentElement

function htmlEvent(funcao, clicada) {
    if (resultado.value !== "") {
        clicada.preventDefault()
        funcao()
    }
}

const numeros = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '-', '/']

html.addEventListener("keydown", (clicada) => {
    if (resultado.value !== "") {
        if (clicada.key === 'Enter') { htmlEvent(igual, clicada) }
        if (clicada.key === 'Backspace') { htmlEvent(ce, clicada) }
        if (clicada.key === 'c') { htmlEvent(c, clicada) }
        if (clicada.key === 'x') { htmlEvent(add('*'), clicada) }
        if (clicada.key === ',') {
            if (resultado.value.endsWith(numeros)) {
                clicada.preventDefault()
                add('0.')
            } else {
                clicada.preventDefault()
                add('.')
            }
        }
        if (clicada.key === 'Alt') { htmlEvent(mudaSinal, clicada) }
        if (clicada.key === '%') { htmlEvent(porcentagem, clicada) }
    }
})

html.addEventListener("keydown", (numerada) => {
    if (numeros.includes(numerada.key)) {
        numerada.preventDefault()
        return add(numerada.key)
    }
})










    //mudar o tema
    const body = document.body;

    window.addEventListener('DOMContentLoaded', () => {
        let temaEscolhido = localStorage.getItem('tema');
        if (temaEscolhido === 'false') {
        temaEscolhido = 'crash'
    }
        if (temaEscolhido) {
            if(temaEscolhido === 'aku'){
                mudarTema('aku')
            }
            document.body.classList.add(temaEscolhido);
        }
    });

    function mudarTema(theme) {
        const body = document.body;
            body.classList.remove("crash", "aku", "neo", "ratcicle")
            body.classList.add(theme)


            const rosa1 = document.querySelector("#rosa1")
                const rosa2 = document.querySelector("#rosa2")
                const amarelo1 = document.querySelector("#amarelo1")
                const amarelo2 = document.querySelector("#amarelo2")
                const roxo1 = document.querySelector("#roxo1")
                const roxo2 = document.querySelector("#roxo2")
                    

            if(theme === "aku"){  
                rosa1.classList.add('rosa')
                rosa2.classList.add('rosa')
                amarelo1.classList.add('amarelo')
                amarelo2.classList.add('amarelo')
                roxo1.classList.add('roxo')
                roxo2.classList.add('roxo')
            } else {
                rosa1.classList.remove('rosa')
                rosa2.classList.remove('rosa')
                amarelo1.classList.remove('amarelo')
                amarelo2.classList.remove('amarelo')
                roxo1.classList.remove('roxo')
                roxo2.classList.remove('roxo')
            }
    }