import { Component } from '../Component.js';

export class Header extends Component {
    
    renderHTML() {
        return /*html*/`
            <header>
                <section>
                    <img id="header-section-logo-img" src="./assets/Pokeball_icon.png" alt="Pokemon Pokeball Logo">
                    <h1>pokémon pokédex</h1>
                </section>
                <nav>
                    <a href="./">Home</a>
                    <a href="./pokedex.html">Pokémon</a>
                </nav>
            </header>
        `;
    }
}
