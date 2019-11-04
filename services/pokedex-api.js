const GET_POKEDEX_URL = 'https://alchemy-pokedex.herokuapp.com/api/pokedex';

export const getPokemons = async() => {
    const response = await fetch(GET_POKEDEX_URL);
    return await response.json();
};
