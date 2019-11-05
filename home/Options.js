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
                <p>
                <select class="type" name="type">
                    <option value="">Limit By Type</option>                
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
                </p>
                <p>
                <select class="ability" name="ability">
                    <option value="">Limit By Ability</option>
                    <option value="adaptability">Adaptability</option>
                    <option value="aerilate">Aerilate</option>
                    <option value="aftermath">Aftermath</option>
                    <option value="air-lock">Air-Lock</option>
                    <option value="analytic">Analytic</option>
                    <option value="anger-point">Anger-Point</option>
                    <option value="anticipation">Anticipation</option>
                    <option value="arena-trap">Arena-Trap</option>
                    <option value="aroma-veil">Aroma-Veil</option>
                    <option value="aura-break">Aura-Break</option>
                    <option value="bad-dreams">Bad-Dreams</option>
                    <option value="battle-armor">Battle-Armor</option>
                    <option value="big-pecks">Big-Pecks</option>
                    <option value="blaze">Blaze</option>
                    <option value="bulletproof">Bulletproof</option>
                    <option value="cheek-pouch">Cheek-Pouch</option>
                    <option value="chlorophyll">Chlorophyll</option>
                    <option value="clear-body">Clear-Body</option>
                    <option value="cloud-nine">Cloud-Nine</option>
                    <option value="color-change">Color-Change</option>
                    <option value="competitive">Competitive</option>
                    <option value="compound-eyes">Compound-Eyes</option>
                    <option value="contrary">Contrary</option>
                    <option value="cursed-body">Cursed-Body</option>
                    <option value="cute-charm">Cute-Charm</option>
                    <option value="damp">Damp</option>
                    <option value="dark-aura">Dark-Aura</option>
                    <option value="defeatist">Defeatist</option>
                    <option value="defiant">Defiant</option>
                    <option value="delta-stream">Delta-Stream</option>
                    <option value="download">Download</option>
                    <option value="drizzle">Drizzle</option>
                    <option value="drought">Drought</option>
                    <option value="dry-skin">Dry-Skin</option>
                    <option value="early-bird">Early-Bird</option>
                    <option value="effect-spore">Effect-Spore</option>
                    <option value="fairy-aura">Fairy-Aura</option>
                    <option value="filter">Filter</option>
                    <option value="flame-body">Flame-Body</option>
                    <option value="flare-boost">Flare-Boost</option>
                    <option value="flash-fire">Flash-Fire</option>
                    <option value="flower-gift">Flower-Gift</option>
                    <option value="flower-veil">Flower-Veil</option>
                    <option value="forecast">Forecast</option>
                    <option value="forewarn">Forewarn</option>
                    <option value="friend-guard">Friend-Guard</option>
                    <option value="frisk">Frisk</option>
                    <option value="fur-coat">Fur-Coat</option>
                    <option value="gale-wings">Gale-Wings</option>
                    <option value="gluttony">Gluttony</option>
                    <option value="gooey">Gooey</option>
                    <option value="grass-pelt">Grass-Pelt</option>
                    <option value="guts">Guts</option>
                    <option value="harvest">Harvest</option>
                    <option value="healer">Healer</option>
                    <option value="heatproof">Heatproof</option>
                    <option value="heavy-metal">Heavy-Metal</option>
                    <option value="honey-gather">Honey-Gather</option>
                    <option value="huge-power">Huge-Power</option>
                    <option value="hustle">Hustle</option>
                    <option value="hydration">Hydration</option>
                    <option value="hyper-cutter">Hyper-Cutter</option>
                    <option value="ice-body">Ice-Body</option>
                    <option value="illuminate">Illuminate</option>
                    <option value="illusion">Illusion</option>
                    <option value="immunity">Immunity</option>
                    <option value="imposter">Imposter</option>
                    <option value="infiltrator">Infiltrator</option>
                    <option value="inner-focus">Inner-Focus</option>
                    <option value="insomnia">Insomnia</option>
                    <option value="intimidate">Intimidate</option>
                    <option value="iron-barbs">Iron-Barbs</option>
                    <option value="iron-fist">Iron-Fist</option>
                    <option value="justified">Justified</option>
                    <option value="keen-eye">Keen-Eye</option>
                    <option value="klutz">Klutz</option>
                    <option value="leaf-guard">Leaf-Guard</option>
                    <option value="levitate">Levitate</option>
                    <option value="light-metal">Light-Metal</option>
                    <option value="lightning-rod">Lightning-Rod</option>
                    <option value="limber">Limber</option>
                    <option value="liquid-ooze">Liquid-Ooze</option>
                    <option value="magic-bounce">Magic-Bounce</option>
                    <option value="magic-guard">Magic-Guard</option>
                    <option value="magician">Magician</option>
                    <option value="magma-armor">Magma-Armor</option>
                    <option value="magnet-pull">Magnet-Pull</option>
                    <option value="marvel-scale">Marvel-Scale</option>
                    <option value="mega-launcher">Mega-Launcher</option>
                    <option value="minus">Minus</option>
                    <option value="mold-breaker">Mold-Breaker</option>
                    <option value="moody">Moody</option>
                    <option value="motor-drive">Motor-Drive</option>
                    <option value="moxie">Moxie</option>
                    <option value="multiscale">Multiscale</option>
                    <option value="multitype">Multitype</option>
                    <option value="mummy">Mummy</option>
                    <option value="natural-cure">Natural-Cure</option>
                    <option value="no-guard">No-Guard</option>
                    <option value="normalize">Normalize</option>
                    <option value="oblivious">Oblivious</option>
                    <option value="overcoat">Overcoat</option>
                    <option value="overgrow">Overgrow</option>
                    <option value="own-tempo">Own-Tempo</option>
                    <option value="parental-bond">Parental-Bond</option>
                    <option value="pickpocket">Pickpocket</option>
                    <option value="pickup">Pickup</option>
                    <option value="pixilate">Pixilate</option>
                    <option value="plus">Plus</option>
                    <option value="poison-heal">Poison-Heal</option>
                    <option value="poison-point">Poison-Point</option>
                    <option value="poison-touch">Poison-Touch</option>
                    <option value="prankster">Prankster</option>
                    <option value="pressure">Pressure</option>
                    <option value="protean">Protean</option>
                    <option value="pure-power">Pure-Power</option>
                    <option value="quick-feet">Quick-Feet</option>
                    <option value="rain-dish">Rain-Dish</option>
                    <option value="rattled">Rattled</option>
                    <option value="reckless">Reckless</option>
                    <option value="refrigerate">Refrigerate</option>
                    <option value="regenerator">Regenerator</option>
                    <option value="rivalry">Rivalry</option>
                    <option value="rock-head">Rock-Head</option>
                    <option value="rough-skin">Rough-Skin</option>
                    <option value="run-away">Run-Away</option>
                    <option value="sand-force">Sand-Force</option>
                    <option value="sand-rush">Sand-Rush</option>
                    <option value="sand-stream">Sand-Stream</option>
                    <option value="sand-veil">Sand-Veil</option>
                    <option value="sap-sipper">Sap-Sipper</option>
                    <option value="scrappy">Scrappy</option>
                    <option value="serene-grace">Serene-Grace</option>
                    <option value="shadow-tag">Shadow-Tag</option>
                    <option value="shed-skin">Shed-Skin</option>
                    <option value="sheer-force">Sheer-Force</option>
                    <option value="shell-armor">Shell-Armor</option>
                    <option value="shield-dust">Shield-Dust</option>
                    <option value="simple">Simple</option>
                    <option value="skill-link">Skill-Link</option>
                    <option value="slow-start">Slow-Start</option>
                    <option value="sniper">Sniper</option>
                    <option value="snow-cloak">Snow-Cloak</option>
                    <option value="snow-warning">Snow-Warning</option>
                    <option value="solar-power">Solar-Power</option>
                    <option value="solid-rock">Solid-Rock</option>
                    <option value="soundproof">Soundproof</option>
                    <option value="speed-boost">Speed-Boost</option>
                    <option value="stall">Stall</option>
                    <option value="stance-change">Stance-Change</option>
                    <option value="static">Static</option>
                    <option value="steadfast">Steadfast</option>
                    <option value="stench">Stench</option>
                    <option value="sticky-hold">Sticky-Hold</option>
                    <option value="storm-drain">Storm-Drain</option>
                    <option value="strong-jaw">Strong-Jaw</option>
                    <option value="sturdy">Sturdy</option>
                    <option value="suction-cups">Suction-Cups</option>
                    <option value="super-luck">Super-Luck</option>
                    <option value="swarm">Swarm</option>
                    <option value="sweet-veil">Sweet-Veil</option>
                    <option value="swift-swim">Swift-Swim</option>
                    <option value="symbiosis">Symbiosis</option>
                    <option value="synchronize">Synchronize</option>
                    <option value="tangled-feet">Tangled-Feet</option>
                    <option value="technician">Technician</option>
                    <option value="telepathy">Telepathy</option>
                    <option value="teravolt">Teravolt</option>
                    <option value="thick-fat">Thick-Fat</option>
                    <option value="tinted-lens">Tinted-Lens</option>
                    <option value="torrent">Torrent</option>
                    <option value="tough-claws">Tough-Claws</option>
                    <option value="toxic-boost">Toxic-Boost</option>
                    <option value="trace">Trace</option>
                    <option value="truant">Truant</option>
                    <option value="turboblaze">Turboblaze</option>
                    <option value="unaware">Unaware</option>
                    <option value="unburden">Unburden</option>
                    <option value="unnerve">Unnerve</option>
                    <option value="victory-star">Victory-Star</option>
                    <option value="vital-spirit">Vital-Spirit</option>
                    <option value="volt-absorb">Volt-Absorb</option>
                    <option value="water-absorb">Water-Absorb</option>
                    <option value="water-veil">Water-Veil</option>
                    <option value="weak-armor">Weak-Armor</option>
                    <option value="white-smoke">White-Smoke</option>
                    <option value="wonder-guard">Wonder-Guard</option>
                    <option value="wonder-skin">Wonder-Skin</option>
                    <option value="zen-mode">Zen-Mode</option>
                </select>
                </p>
                <p>
                <select class="shape" name="shape">
                    <option value="">Limit By Shape</option>
                    <option value="armor">Armor</option>
                    <option value="arms">Arms</option>
                    <option value="ball">Ball</option>
                    <option value="blob">Blob</option>
                    <option value="bug-wings">Bug-Wings</option>
                    <option value="fish">Fish</option>
                    <option value="heads">Heads</option>
                    <option value="humanoid">Humanoid</option>
                    <option value="legs">Legs</option>
                    <option value="quadruped">Quadruped</option>
                    <option value="squiggle">Squiggle</option>
                    <option value="tentacles">Tentacles</option>
                    <option value="upright">Upright</option>
                    <option value="wings">Wings</option>
                </select>
                </p>
                <p>
                <select class="egg" name="egg">
                    <option value="">Limit By Egg Group</option>
                    <option value="bug">Bug</option>
                    <option value="ditto">Ditto</option>
                    <option value="dragon">Dragon</option>
                    <option value="fairy">Fairy</option>
                    <option value="flying">Flying</option>
                    <option value="ground">Ground</option>
                    <option value="humanshape">Humanshape</option>
                    <option value="indeterminate">Indeterminate</option>
                    <option value="mineral">Mineral</option>
                    <option value="monster">Monster</option>
                    <option value="no-eggs">No-Eggs</option>
                    <option value="plant">Plant</option>
                    <option value="water1">Water1</option>
                    <option value="water2">Water2</option>
                    <option value="water3">Water3</option>   
                </select>
                <p>
                    <button>Search 🔍</button>
                </p>
            </form>
        `;
    }
}
