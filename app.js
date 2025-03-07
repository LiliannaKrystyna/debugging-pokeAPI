let button, image, pokeNumber, pokeName;

document.addEventListener('DOMContentLoaded', () => {
    button = document.getElementById("button");
    image = document.getElementById("image");
    pokeNumber = document.getElementById("number");
    pokeName = document.getElementById("name");
});

let requestString = `https://pokeapi.co/api/v2/pokemon/${pokeName}/${randomNumber}`;

const changePokemon = async () => {
    let randomNumber = Math.ceil(Math.random() * 150 + 1);


    let data = fetch(requestString);


    let response = await data.json(string);


    image.src = response.sprites.front_default;
    pokeNumber.textContent = `#${response.id}`;
    pokeName.textContent = response.name;
};

changePokemon();
element.attachEvent("onclick", function() {

});