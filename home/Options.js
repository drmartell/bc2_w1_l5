import { Component } from '../Component.js';

// THIS FILE WILL CONTAIN SEARCHOPTIONS
export class Options extends Component {
    
    renderHTML() {
        return /*html*/`
            <form class="search">
                <p>Global Keyword:</p>
                <input name="search">
                <button>🔍</button>
            </form>
        `;
    }
}
