import { Component } from '../Component.js';

export class PokemonItem extends Component {
    renderHTML() {
        const {
            pokemon,
            type_1,
            type_2,
            color_1,
            url_image,
        } = this.props.pokemon;

        return /*html*/`
            <li class="pokemon-item" style="background-color: ${color_1}">
                <h2>
                    <img 
                        src="${url_image}"
                        alt="${pokemon} image"
                    >
                </h2>
                <div class="name">${pokemon}</div>
                <div class="section-ul-li_type-div">
                    Types: ${type_1}${type_2 !== 'NA' ? ', ' + type_2 : ''}
                </div>
            </li>
        `;
    }
}
