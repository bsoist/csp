function swithPage(evt)
{
    getData(evt.target.dataset['url']);
}

function processData(data)
{
    console.log(data);
    var pokemonList = document.querySelector('#pokemon_list');
    pokemonList.innerHTML = '';
    var buttonIds = ['previous', 'next'];
    for (let i = 0; i < buttonIds.length; i++) {
        var thisButtonId = buttonIds[i]
        var thisButton = document.querySelector('#' + thisButtonId);
        if (data[thisButtonId] === null) {
            thisButton.classList = ['hidden'];
        } else {
            thisButton.classList = [''];
            thisButton.dataset['url'] = data[thisButtonId];
        }
    }
    for (let i = 0; i < data.results.length; i++) {
        let pokemonName = data.results[i].name;
        let newPokemon = document.createElement('li');
        newPokemon.innerHTML = pokemonName;
        pokemonList.appendChild(newPokemon); 
    }
}

function getData(apiURL)
{
    console.log('getting data');
    jQuery.get(apiURL, processData);
}

function startApp()
{
    console.log('starting app');
    document.querySelector('#previous').addEventListener('click', swithPage);
    document.querySelector('#next').addEventListener('click', swithPage);
    getData('https://pokeapi.co/api/v2/pokemon/');
}

document.addEventListener('DOMContentLoaded', startApp);