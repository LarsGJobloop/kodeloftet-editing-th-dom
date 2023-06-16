// Update an element in the DOM (Document Object Model)
function setTitle() {
  let header = document.getElementById("header")
  header.innerText = "Satt via JavaScript"
}

// Hente informasjon fra HTML (DOM)
function logInnerText() {
  let header = document.getElementById("header")
  console.log(header.innerText)
}

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
  
  console.log(header)
  console.dir(header)
}