import { html } from 'https://unpkg.com/lit-html?module';

export default ({
    navigationHandler,
    isAuthenticated,
    email,
}) => html `
<!-- Header -->
<header @click=${navigationHandler}>
        <h1><a class="home" href="/">SoftWiki</a></h1>
        <nav class="nav-buttons">
            ${
                isAuthenticated
                ? html`
                    <a href="/create">Create</a>
                    <a href="/logout">Logout</a>
                `
                : html`
                 <a href="/register">Register</a>    
                 `
            }
        </nav>
    </header>
`;