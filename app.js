// Escribe tu código aquí.
// Paso 1: Función bigWords
function bigWords(string, wordsArray) {
  let result = [];
  for (let i = 0; i < wordsArray.length; i++) {
    if (wordsArray[i].length > string.length) {
      result.push(wordsArray[i]);
    }
  }
  return result;
}

// Paso 2: Función printArray
function printArray(wordsArray) {
  const list = document.querySelector("#words-list");
  list.innerHTML = "";
  for (let i = 0; i < wordsArray.length; i++) {
    const li = document.createElement("li");
    li.textContent = wordsArray[i];
    list.appendChild(li);
  }
}

// Paso 3: Array de palabras
const words = [
  "perro",
  "gato",
  "elefante",
  "jirafa",
  "rinoceronte",
  "leon",
  "tigre",
  "hipopotamo",
  "cebra",
  "cocodrilo",
];

// Paso 5: Función para manejar el clic del botón
function handleButtonClick() {
  const input = document.querySelector("#search-input");
  const search = input.value;
  const result = bigWords(search, words);
  printArray(result);
}

// Event listener para el botón
const button = document.querySelector("#search-button");
button.addEventListener("click", handleButtonClick);
