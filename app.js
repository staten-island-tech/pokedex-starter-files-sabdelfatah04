const DOMStrings = {
  input: document.getElementById("pkmn-form"),
  name: document.getElementById("pokemon-name"),
  displayName: document.querySelector(".pkmn-name-size"),
  displayImageFront: document.querySelector(".pkmn-image-front-def"),
  displayImageFront: document.querySelector(".pkmn-image-back-def"),
  displayImageShinyFront: document.querySelector(".pkmn-image-shiny-front"),
  displayImageShinyBack: document.querySelector(".pkmn-image-shiny-back"),
  displayNum: document.querySelector(".pkmn-num")
};

function getPkmn() {
  DOMStrings.input.addEventListener("submit", async function(e) {
    e.preventDefault();
    try {
      const result = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${DOMStrings.name.value}`
      );
      const data = await result.json();
      //console.log(data);

      const displayPkmn = function(data) {};
    } catch (err) {
      console.log(err);
    }
  });
}
getPkmn();
