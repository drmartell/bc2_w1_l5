import { Component } from '../Component.js';

export class FilterImages extends Component {

    onRender(select) {
        const onFilter = this.props.onFilter;

        select.addEventListener('input', () => {
            const keywordFilter = document.getElementById('keyword').value.toLowerCase();
            const hornsFilter = document.getElementById('horns').value;
            onFilter({ 
                keywordFilter,
                hornsFilter,
            });
        });
    }

    renderHTML() {
        const images = this.props.images;

        const keywordArray = images.map(image => image.keyword);
        const uniqueKeywordArray = [...new Set(keywordArray)];
        const optionTags = uniqueKeywordArray.map(keyword => 
            `<option value="${keyword}">${keyword[0].toUpperCase() + keyword.slice(1)}</option>`);
        let optionsString = '';
        optionTags.forEach(optionTag => optionsString += optionTag);
        return `
            <section id="options">
                <select id="keyword">
                <option value="" selected>All Types</option>
                ${optionsString}
                </select>
                <select id="horns">
                    <option value="" selected>All Horns</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>
            </section>`;
    }
}
