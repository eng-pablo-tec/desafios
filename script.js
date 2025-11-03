// === DESAFIOS ===
const desafios = {
  iniciante: [
    {
      texto: "Crie variáveis 'nome' e 'sobrenome' e mostre no console 'Olá, nome sobrenome!'",
      dica: "Use let nome = 'João'; let sobrenome = 'Silva'; console.log('Olá, ' + nome + ' ' + sobrenome);"
    },
    {
      texto: "Peça ao usuário para digitar um número e mostre o dobro desse número.",
      dica: "Use prompt() para pedir o número e console.log() para mostrar o resultado."
    },
    {
      texto: "Some dois números e mostre o resultado no console.",
      dica: "let num1 = 5; let num2 = 3; console.log(num1 + num2);"
    }
  ],
  intermediario: [
    {
      texto: "Peça ao usuário a idade e diga se ele é maior ou menor de idade.",
      dica: "Use if(idade >= 18) { console.log('Maior'); } else { console.log('Menor'); }"
    },
    {
      texto: "Verifique se um número é par ou ímpar.",
      dica: "Use o operador % (resto da divisão)."
    },
    {
      texto: "Peça dois números e mostre qual é o maior.",
      dica: "Use if, else if e else para comparar os dois números."
    }
  ],
  avancado: [
    {
      texto: "Use um while para contar de 1 até 10 no console.",
      dica: "let contador = 1; while(contador <= 10){ console.log(contador); contador++; }"
    },
    {
      texto: "Peça um número e conte até ele usando while.",
      dica: "Lembre-se de incrementar o contador dentro do laço."
    },
    {
      texto: "Crie um pequeno jogo que sorteie um número e o usuário tente adivinhar com prompt.",
      dica: "Use Math.random() para gerar números aleatórios."
    }
  ]
};

let nivelAtual = "iniciante";

function trocarNivel() {
  nivelAtual = document.getElementById("nivelSelect").value;
  document.getElementById("personagem").innerText =
    "Nível " + nivelAtual + " selecionado! Clique em 'Novo desafio'.";
}

function novoDesafio() {
  const lista = desafios[nivelAtual];
  const desafio = lista[Math.floor(Math.random() * lista.length)];
  document.getElementById("personagem").innerText = desafio.texto;
  document.getElementById("dica-texto").innerText = desafio.dica;
}

async function executarCodigo() {
  const codigo = document.getElementById("code").value;
  const consoleOutput = document.getElementById("console-output");
  consoleOutput.innerText = "";

  const consoleLogOriginal = console.log;
  console.log = function (...args) {
    consoleOutput.innerText += args.join(" ") + "\n";
    consoleLogOriginal.apply(console, args);
  };

  try {
    await eval(`(async () => { ${codigo} })()`);
  } catch (erro) {
    consoleOutput.innerText += "Erro: " + erro.message + "\n";
  }

  console.log = consoleLogOriginal;
}

// === BOTÃO DE TEMA ===
function alternarTema() {
  const body = document.body;
  const botao = document.getElementById("botaoTema");

  if (body.classList.contains("tema-azul")) {
    body.classList.remove("tema-azul");
    body.classList.add("tema-rosa");
    botao.textContent = "💙 Tema Azul";
  } else {
    body.classList.remove("tema-rosa");
    body.classList.add("tema-azul");
    botao.textContent = "🌸 Tema Rosa";
  }
}
