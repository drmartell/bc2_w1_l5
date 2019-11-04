import { Component } from '../Component.js';

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
