let pokemon_species;

const source = document.getElementById("entry-template").innerHTML;
const template = Handlebars.compile(source);


document.querySelector("body").innerHTML = html

 function fetchData() {
    fetch('https://pokeapi.co/api/v2/pokemon-color/yellow')
        .then(response => response.json())
        .then(data => {


            
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}