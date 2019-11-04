import { Component } from '../Component.js';
import { Header } from './Header.js';
import { Options } from './Options.js';
//import { List } from './List.js';
import { Footer } from './Footer.js';
import { PokemonList } from './PokemonList.js';
// import { FilterPokemon } from './FilterImages.js';
// import { pokemons } from '../data/pokemons.js';
// import { AddImage } from './AddImage.js';
import { getPokemons } from '../services/pokedex-api.js';
import { Paging } from './Paging.js';

export class App extends Component {

    async onRender(dom) { 
        const header = new Header();
        const headerDOM = header.renderDOM();
        dom.prepend(headerDOM);

        const options = new Options();
        const optionsDOM = options.renderDOM();
        const optionsSection = dom.querySelector('.options-section');
        optionsSection.prepend(optionsDOM);

        const pokemonList = new PokemonList({ pokemons: [] });
        const pokemonListDOM = pokemonList.renderDOM();
        const paging = new Paging();
        const pagingDOM = paging.renderDOM();
        const listSection = dom.querySelector('.list-section');
        listSection.appendChild(pagingDOM);
        listSection.appendChild(pokemonListDOM);

        const footer = new Footer();
        const footerDOM = footer.renderDOM();
        dom.appendChild(footerDOM);

        async function loadPokemons() {
            const response = await getPokemons();
            const pokemons = response.results;
            const count = response.count;
            pokemonList.update({ pokemons });
            paging.update({ count });
        } loadPokemons();

        window.addEventListener('hashchange', () => loadPokemons());
    }

    renderHTML() {
        return /*html*/`
            <div>
                <!-- Header goes here -->
                <main>
                    <section class="options-section">
                        <!-- Options goes here -->
                    </section>
                    <section class="list-section">
                        <!-- Paging goes here -->
                        <!-- PokemonList goes here -->
                    </section>
                    <section class="form-section">
                        <!-- AddImage Form goes here -->
                    </section>
                </main>
                <!-- Footer goes here -->
            </div>
        `;
    }
}
