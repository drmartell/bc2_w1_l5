import { Component } from '../Component.js';
import { Header } from './Header.js';
import { HomeBody } from './HomeBody.js';
import { Footer } from './Footer.js';

export class Home extends Component {

    onRender(dom) { 
        const header = new Header();
        const headerDOM = header.renderDOM();
        dom.prepend(headerDOM);
        
        const homeBody = new HomeBody();
        const homeBodyDOM = homeBody.renderDOM();
        dom.appendChild(homeBodyDOM);

        const footer = new Footer();
        const footerDOM = footer.renderDOM();
        dom.appendChild(footerDOM);
    }

    renderHTML() {
        return /*html*/`
            <div>
                <!-- Header goes here -->
                <!-- HomeBody goes here -->
                <!-- Footer goes here -->
            </div>
        `;
    }
}
