import {html} from 'https://unpkg.com/lit-html?module';

import header from './header.js'
import footer from './footer.js'


//children are the templateResults
export default (children, props) => html`
    ${header(props)}
    ${children(props)}
    ${footer(props)}
`;
