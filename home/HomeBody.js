import { Component } from '../Component.js';

export class HomeBody extends Component {
    renderHTML() {
        return /*html*/`
            <section>
                <p>
                    You are HOME.
                    <a href="./pokedex.html">View Pokémon!</a>
                </p>
            </section>
        `;
    }
}
