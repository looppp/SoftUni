import { addPartials, getUserId } from '../util.js'
import { getAll, getById, deleteById } from '../data.js'
import { showSuccess, showError } from '../notifications.js';

export async function homePage() {
    await addPartials(this);

    this.partials.movie = await this.load('/views/movies/movie.hbs');
    const context = { movie: await getAll() }
    context.user = this.app.userData;

    this.partial('/views/movies/home.hbs', context);
}

export async function createPage() {
    await addPartials(this);

    const context = {
        user: this.app.userData
    };

    this.partial('/views/movies/add.hbs', context);
}

export async function postCreate(ctx) {
    const { title, description, imgUrl } = ctx.params;
    try {
        if (title.length == 0 || description.length == 0 || imgUrl.length == 0) {
            throw new Error('All fields are required!');
        } else {
            const result = await createMovie({
                title,
                description,
                imgUrl
            })
            showSuccess('Successesfully created Movie!')
            ctx.redirect('/home');
        }
    } catch (err) {
        showError(err.message);
    }
}

export async function detailsPage() {
    await addPartials(this);

    const movie = await getById(this.params.id)
    const context = {
        user: this.app.userData,
        movie,
        canEdit: movie._ownerId == getUserId()
    }

    this.partial('/views/movies/description.hbs', context);
}


export async function editMovie() {

    await addPartials(this);

    const movie = await getById(this.params.id);
    if (movie._ownerId !== getUserId()) {
        this.redirect('/home')
    } else {
        const context = {
            user: this.app.userData,
            movie
        };

        this.partial('/views/movies/edit.hbs', context);

    }
}


export async function postEditMovie(ctx) {
    const { title, description, imgUrl } = ctx.params;
    try {
        if (title.length == 0 || description.length == 0 || imgUrl.length == 0) {
            throw new Error('All fields are required!');
        } else {
            console.log(ctx.params.id);
            const result = await editMovie(ctx.params.id, {
                title,
                description,
                imgUrl
            })
            showSuccess('Movie was edited succesesfully!')
            ctx.redirect('/home');
        }
    } catch (err) {
        showError(err.message);
    }
}


export async function deleteMovie() {
    try {
        const id = this.params.id
        const result = deleteById(id);
        showSuccess('The movie was deleted successesfully');
        this.redirect('/home');
    }
    catch (err) {
        showError(err.message)
    }
}