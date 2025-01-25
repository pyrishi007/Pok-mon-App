const images = document.body.querySelector("#pokeimage");
const search = document.body.querySelector(".search");
const pokemonname = document.body.querySelector("#pokemon_name");
const input_value = document.body.querySelector("#char_name");
const name = document.body.querySelector("#para1");
const type = document.body.querySelector("#para2");
const weight = document.body.querySelector("#para3");
const power = document.body.querySelector("#para4");

const pokemon_apiData = async function (pokemon_name) {

  //fetching new api
  const result = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemon_name.toLowerCase()}`
  )
    //catching new function
    .then(async (response) => {
      if (!response.ok) {
        throw new Error("respone isnt good");
      }
      // returning new promise
      return await response.json();
    })
    // capturing api data
    .then((data) => {
      set_data(data);
    })
    .catch((error) => {
      console.log(error);
    });
};

//eventListener
search.addEventListener("click", (e) => {
  if (e.target.nodeName === "IMG") {
    if (input_value.value == "rohit" || input_value.value == "Rohit") {
      //ester_egg for developer
      developer_profile();
    } else {
      //taking the of the pokemon
      const pokemon_Name = input_value.value;
      pokemon_apiData(pokemon_Name);
    }
  }
});


//api__data
function set_data(data) {
  //logging pokemon
  console.log(data);

  //main pokemon image
  images.src = data.sprites.front_default;

  //main pokemon name
  pokemonname.textContent = data.species.name.toUpperCase();

  //pokemon name
  name.textContent = data.species.name;

  //pokemon type
  type.textContent = data.types[0].type.name;

  //pokemon weight
  weight.textContent = `${data.weight}g`;

  //pokemon power
  power.textContent = `${data.abilities[0].ability.name}`;
}


//developer_data
function developer_profile() {
  //my image
  images.src = "./images/profile-pic (1).png";

  //Developer_name
  pokemonname.textContent = "Rohit Gorain";
  name.textContent = "Rohit Gorain";

  //my_type
  type.textContent = "MERN dev";

  //my weight
  weight.textContent = "75kg";

  //my_aura
  power.textContent = "1000+ aura";
}
