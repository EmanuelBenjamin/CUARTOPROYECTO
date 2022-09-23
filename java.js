
let lista = document.getElementById("pokedex")
function consultarpokemon(id, num) {
fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
.then(function(response){  
    response.json()
    .then(function (pokemon){
crearPokemon(pokemon, num)

    })
})

 }

 function consultarpokemones() {
    let primerId = Math.round(Math.random() * 150)
    let segundoId = Math.round(Math.random() * 150)
    let terceroId = Math.round(Math.random() * 150)
    let cuartoId = Math.round(Math.random() * 150)
    let quintoId = Math.round(Math.random() * 150)
    let sextoId = Math.round(Math.random() * 150)


consultarpokemon(primerId, 1)
consultarpokemon(segundoId, 2)
consultarpokemon(terceroId, 3)
consultarpokemon(cuartoId, 4)
consultarpokemon(quintoId, 5)
consultarpokemon(sextoId, 6)

}

function crearPokemon(pokemon,num) {
let item = lista.querySelector(`#numero-${num}`)
let imagen = item.getElementsByTagName("img")[0]
imagen.setAttribute("src", pokemon.sprites.front_default)
let nombre = item.getElementsByTagName("p")[0]
nombre.textContent = pokemon.name
}
consultarpokemones()
