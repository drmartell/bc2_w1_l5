import { Component } from '../Component.js';
import { getTypes } from '../services/pokedex-api.js';

// THIS FILE WILL CONTAIN SEARCHOPTIONS
export class Options extends Component {

    async getTypesList() {
        const typesListArr = [];
        const response = await getTypes();
        response.forEach(typeObj => {
            typesListArr.push(typeObj.type);
        });
        return typesListArr;
    }

    onRender(form) {
        const searchInput = form.querySelector('input[name=search]');
        //const typeRadios = form.querySelectorAll('input[name=type]');
        const typeSelects = form.querySelectorAll('option');

        function updateControls() {
            const queryString = window.location.hash.slice(1);
            const searchParams = new URLSearchParams(queryString);

            searchInput.value = searchParams.get('pokemon') || '';

            const type = searchParams.get('type');
            if (type) {
                // typeRadios.forEach(typeRadio => {
                //     typeRadio.checked = typeRadio.value === type;
                // });
                typeSelects.forEach(optionTag => {
                    optionTag.selected = optionTag.value === type ? 'selected' : '';
                });
            }
        } updateControls();

        window.addEventListener('hashchange', () => {
            updateControls();
        });

        // const typeDropDownEl = form.querySelector('.typeDropDown');

        // ['1', '2', '3'].forEach(type => {
        //     const optionEl = form.createElement('option');
        //     optionEl.innerHTML = `<option value="${type}">${type}</option>`;
        //     typeDropDownEl.appendChild();
        // });

        form.addEventListener('submit', event => {
            event.preventDefault();
            const formData = new FormData(form);

            const queryString = window.location.hash.slice(1);
            const searchParams = new URLSearchParams(queryString);

            const theType = formData.get('type');
            if (theType !== '') searchParams.set('type', theType);
            else searchParams.delete('type');
            //searchParams.set('type', formData.get('type') || '');
            const theSearch = formData.get('search');
            if (theSearch !== '') searchParams.set('pokemon', theSearch);
            else searchParams.delete('pokemon');
            searchParams.set('page', 1);

            window.location.hash = searchParams.toString();
        });
    }

    renderHTML() {
        return /*html*/`
            <form class="options">
                <label for="search">
                    Search:
                </label>
                <p>
                    <input id="search" name="search">
                </p>
                <!-- <fieldset class="type">
                    <label>
                        <input type="radio" name="type" value="normal">
                        Normal
                    </label>
                    <label>
                        <input type="radio" name="type" value="fight">
                        Fight
                    </label>
                    <label>
                        <input type="radio" name="type" value="flying">
                        Flying
                    </label>
                </fieldset> -->

                <select class="type" name="type">
                    <option value="">Limit To Type</option>                
                    <option value="bug">Bug</option>
                    <option value="dark">Dark</option>
                    <option value="dragon">Dragon</option>
                    <option value="electric">Electric</option>
                    <option value="fairy">Fairy</option>
                    <option value="fighting">Fighting</option>
                    <option value="fire">Fire</option>
                    <option value="flying">Flying</option>
                    <option value="ghost">Ghost</option>
                    <option value="grass">Grass</option>
                    <option value="ground">Ground</option>
                    <option value="ice">Ice</option>
                    <option value="normal">Normal</option>
                    <option value="poison">Poison</option>
                    <option value="psychic">Psychic</option>
                    <option value="rock">Rock</option>
                    <option value="steel">Steel</option>
                    <option value="water">Water</option>
                </select> 

                <p>
                    <button>Search 🔍</button>
                </p>
            </form>
        `;
    }
}
