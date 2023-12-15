let inp = document.getElementById("text1");

let operacao = "";

function agregar(valor) {
  operacao += valor;
  inp.value = operacao;
}

function calcular() {
  try {
    operacao = eval(operacao);
    inp.value = operacao;
  } catch (error) {
    inp.value = "error";
  }
}

function limpar() {
  operacao = "";
  inp.value = "";
}
function um() {
  operacao = operacao.slice(0, -1);
  inp.value = operacao;
}
