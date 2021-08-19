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
