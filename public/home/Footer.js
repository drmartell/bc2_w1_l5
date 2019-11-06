import { Component } from '../Component.js';

export class Footer extends Component {
    renderHTML() {
        return /*html*/`
            <footer>
                Lab by Canadian Casey @<a href="https://www.alchemycodelab.com/">alchemycodelab</a>
                <p><a target="_blank" href="https://icons8.com/icons/set/arrow">Arrow</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a></p>
            </footer>
        `;
    }
}
