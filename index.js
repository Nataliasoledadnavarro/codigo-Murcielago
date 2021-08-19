
//Función para traducir al codigo murciélago

const inputTexto = document.getElementById("ingresar-texto");
const inputTextoTraducido = document.getElementById("texto-traducido");

inputTexto.oninput = () => {
  const textoTraducido = inputTexto.value
    .replace(/m/gi, "0")
    .replace(/u/gi, "1")
    .replace(/r/gi, "2")
    .replace(/c/gi, "3")
    .replace(/i/gi, "4")
    .replace(/e/gi, "5")
    .replace(/l/gi, "6")
    .replace(/a/gi, "7")
    .replace(/g/gi, "8")
    .replace(/o/gi, "9")

  inputTextoTraducido.value = textoTraducido;
};

//Función para traducir del murcielago a texto tradicional

const textoEnMurcielago = document.getElementById("texto-murcielago")
const aTextoTradicional = document.getElementById("texto-sin-codigo")

textoEnMurcielago.oninput = () => {
  const textoTradicional = textoEnMurcielago.value
  .replace(/0/gi, "m")
  .replace(/1/gi, "u")
  .replace(/2/gi, "r")
  .replace(/3/gi, "c")
  .replace(/4/gi, "i")
  .replace(/5/gi, "e")
  .replace(/6/gi, "l")
  .replace(/7/gi, "a")
  .replace(/8/gi, "g")
  .replace(/9/gi, "o")

  aTextoTradicional.value = textoTradicional
}