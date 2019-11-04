import { Component } from '../Component.js';
import { PokemonItem } from './PokemonItem.js';

export class PokemonList extends Component {
    onRender(dom) {
        const { pokemons } = this.props;

        pokemons.forEach(pokemon => {
            const pokemonItem = new PokemonItem({ pokemon } || []);
            const pokemonItemDOM = pokemonItem.renderDOM();
            dom.appendChild(pokemonItemDOM);
        });
    }
    
    renderHTML() {
        return /*html*/`
            <ul class="pokemon"></ul>
        `;
    }
}
