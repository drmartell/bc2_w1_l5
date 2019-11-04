import { Component } from '../Component.js';

export class Paging extends Component {
    
    renderHTML() {
        return /*html*/`
            <p class="paging">
                <button class="prev" disabled><img id="left-arrow" src="./assets/icons8-arrow-100-left.png"></button>
                <span>Page 1 of 1,000,000</span>
                <button class="next"><img id="right-arrow" src="./assets/icons8-arrow-100-right.png"></button>
            </p>
        `;
    }
}
