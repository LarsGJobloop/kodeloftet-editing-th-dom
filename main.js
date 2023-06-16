// Elemnter som vi ønsker å bruke
const headerElement = document.getElementById("header")


// Updatere et HTML element (DOM, Document Object Model)
function setTitle() {
  headerElement.innerText = "Satt via JavaScript"
}

// Hente informasjon fra HTML (DOM)
function logInnerText() {
  console.log(headerElement.innerText)
}

// Sett css klassen til en ny verdi
function changeClass() {
  headerElement.classList = "new-title"
}

// Kun for å vise eksempler
function logExamples() {
  // Eksempler for de forskjellige typen
  let tall = 42
  let boolean = false
  let liste = [1, 3, 43]
  let objekter = {
    name: "Lars G",
    age: 33,
    interests: ["it", "språk", "kunnskap"],
    webpage: {
      name: "homepage",
      url: "www.home.no"
    }
  }
  
  console.log(headerElement)
  console.dir(headerElement)
}


// Vi kan gruppere sett med funksjoner inne i objekter
const myFunctions = {
  setTitle: setTitle,
  logInnerText: logInnerText,
  logExamples: logExamples,
}
// Og kjøre de litt som vanlige funksjoner
// myFunctions.logExamples()