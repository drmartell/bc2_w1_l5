import { Component } from '../Component.js';
import { PokemonItem } from './PokemonItem.js';

export class PokemonList extends Component {
    renderHTML() {
        return /*html*/`
            <ul class="pokemon"></ul>
        `;
    }

    onRender(dom) {
        const pokemons = this.props.pokemons;

        pokemons.forEach(pokemon => {
            const pokemonItem = new PokemonItem({ pokemon } || []);
            const pokemonItemDOM = pokemonItem.renderDOM();
            dom.appendChild(pokemonItemDOM);
        });
    }
}
