// Función para encriptar texto
function encryptText() {
  var inputText = document.getElementById("inputText").value;
  var encryptedText = btoa(inputText); // Codifica en base64 (puedes usar otro método de codificación)
  document.getElementById("outputMessage").innerHTML =
    "<p>Texto encriptado:</p><p>" + encryptedText + "</p>";
}

// Función para desencriptar texto
function decryptText() {
  var encryptedText = document
    .getElementById("outputMessage")
    .getElementsByTagName("p")[1].textContent;
  var decryptedText = atob(encryptedText); // Decodifica desde base64 (debe coincidir con el método de codificación)
  document.getElementById("outputMessage").innerHTML =
    "<p>Texto desencriptado:</p><p>" + decryptedText + "</p>";
}

// Asignar eventos a los botones
document.querySelector(".btn-primary").addEventListener("click", encryptText);
document.querySelector(".btn-secondary").addEventListener("click", decryptText);
