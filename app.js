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

/*
function bigWords(string, wordsArray) { ... } - Esta es una
función que toma dos parámetros: una cadena string y un array
wordsArray. La función itera a través del array y compara la
longitud de cada palabra en el array con la longitud de la cadena.
Si la longitud de la palabra en el array es mayor que la longitud
de la cadena, se agrega la palabra al array result. Finalmente,
la función devuelve el array result que contiene todas las
palabras en el array wordsArray que son más largas que la
cadena string.
*/




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

/*
function printArray(wordsArray) { ... } - Esta función toma un
array wordsArray y crea elementos HTML <li> para cada elemento
en el array. Luego, estos elementos se agregan a un elemento HTML
<ul> con el id words-list. El contenido anterior del elemento
<ul> se borra antes de agregar los nuevos elementos.
*/




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

/*
const words = [...] - Esta es una matriz de palabras utilizadas
por la función bigWords para buscar palabras más largas que la
cadena de búsqueda.
*/




// Paso 5: Función para manejar el clic del botón
function handleButtonClick() {
  const input = document.querySelector("#search-input");
  const search = input.value;
  const result = bigWords(search, words);
  printArray(result);
}

/*
function handleButtonClick() { ... } - Esta función se ejecuta
cuando se hace clic en el botón con el id search-button. Recupera
el valor del campo de entrada con el id search-input, llama a la
función bigWords con ese valor y la matriz words como argumentos
y luego llama a la función printArray con el resultado.
*/





// Event listener para el botón
const button = document.querySelector("#search-button");
button.addEventListener("click", handleButtonClick);
/*
const button = document.querySelector("#search-button");
- Esto recupera el botón HTML con el id search-button.
button.addEventListener("click", handleButtonClick);
- Esto agrega un evento click al botón search-button que
ejecutará la función handleButtonClick cuando se haga clic en él.
*/
