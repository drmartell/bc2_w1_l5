
const POKEDEX_API_URL = 'https://alchemy-pokedex.herokuapp.com/api/pokedex/';

export const getPokemons = async() => {
    let queryString = window.location.hash.slice(1);
    const url = `${POKEDEX_API_URL}?${queryString}`;
    const response = await fetch(url);
    return await response.json();
};

export const getTypes = async() => {
    const url = `${POKEDEX_API_URL}/types`;
    const response = await fetch(url);
    return await response.json();
};