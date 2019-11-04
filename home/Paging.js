import { Component } from '../Component.js';

export class Paging extends Component {
    
    getPage() {
        const queryString = window.location.hash.slice(1);
        const searchParams = new URLSearchParams(queryString);
        const parsedPage = parseInt(searchParams.get('page'));
        return isNaN(parsedPage) ? 1 : parsedPage;
    }

    onRender(dom) {
        const prevButton = dom.querySelector('.prev');
        if (!prevButton) return;
        const nextButton = dom.querySelector('.next');
        let page = this.getPage();

        window.addEventListener('hashchange', () => {
            this.getPage();
        });

        const changePage = (pages) => {
            const queryString = window.location.hash.slice(1);
            const searchParams = new URLSearchParams(queryString);
            searchParams.set('page', page + pages);
            window.location.hash = searchParams.toString();
        };

        prevButton.addEventListener('click', () => changePage(-1));
        nextButton.addEventListener('click', () => changePage(1));
    }

    renderHTML() {
        const perPage = 20; // WOULD BE NICE TO ALLOW USER TO SELECT
        const totalResults = this.props.totalResults;
        let page = this.getPage();
        const lastPage = Math.ceil(totalResults / perPage);

        if (!totalResults) { // UNSURE IF THIS IS THE CORRECT IMPLEMENTATION FOR THIS API
            return /*html*/`
                <p class="paging">No results, try another search</p>
            `;
        }

        return /*html*/`
            <p class="paging">
                <button class="prev" ${page === 1 ? 'disabled' : ''}><img id="left-arrow" src="./assets/icons8-arrow-100-left.png"></button>
                <span>Page ${page} of ${lastPage}</span>
                <button class="next" ${page === lastPage ? 'disabled' : ''}><img id="right-arrow" src="./assets/icons8-arrow-100-right.png"></button>
            </p>
        `;
    }
}
