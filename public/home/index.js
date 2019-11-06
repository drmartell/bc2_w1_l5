import { Home } from './Home.js';

const home = new Home();
const dom = home.renderDOM();
document.body.prepend(dom);
