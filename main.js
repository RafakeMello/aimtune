const inputJogo1 = document.getElementById("jogo1");
const inputJogo2 = document.getElementById("jogo2");
const inputSensi = document.getElementById("sensi");
const inputSensiConverter = document.getElementById("sensiConverter");
const dpi1 = document.getElementById("dpi1");
const dpi2 = document.getElementById("dpi2");

function ConverterSensi() {
  const jogo1Value = inputJogo1.value;
  const jogo2Value = inputJogo2.value;
  const sensiValue = parseFloat(inputSensi.value);
  const dpi1Value = parseFloat(dpi1.value);
  const dpi2Value = parseFloat(dpi2.value);

  if (isNaN(sensiValue) || isNaN(dpi1Value) || isNaN(dpi2Value)) {
    inputSensiConverter.value = "Insira valores válidos.";
    return;
  }

  let resultado;

  if (jogo1Value === "valorant" && jogo2Value === "cs") {
    resultado = (sensiValue * 3.1815 * dpi1Value) / dpi2Value;
  } else if (jogo1Value === "cs" && jogo2Value === "valorant") {
    resultado = ((sensiValue / 3.1815) * dpi1Value) / dpi2Value;
  } 
  else if (jogo1Value === jogo2Value ) {
    resultado = (sensiValue  * dpi1Value) / dpi2Value;}
  else {
    inputSensiConverter.value = "Conversão entre jogos não implementada.";
    return;
  }

  inputSensiConverter.value = resultado.toFixed(3);
}

inputJogo1.addEventListener("change", ConverterSensi);
inputJogo2.addEventListener("change", ConverterSensi);
inputSensi.addEventListener("input", ConverterSensi);
dpi1.addEventListener("input", ConverterSensi);
dpi2.addEventListener("input", ConverterSensi);
