import { Component } from '../Component.js';

export class PokemonItem extends Component {
    renderHTML() {
        const { pokemon, color_1, url_image, shape } = this.props.pokemon;

        return /*html*/`
            <li class="pokemon-item" style="background-color: ${color_1}">
                <h2>
                    <img 
                        src="${url_image}"
                        alt="${pokemon} image"
                    >
                </h2>
                <div class="name">${pokemon}</div>
                <div class="section-ul-li_category-div">
                    Shape: ${shape}
                </div>
            </li>
        `;
    }
}
