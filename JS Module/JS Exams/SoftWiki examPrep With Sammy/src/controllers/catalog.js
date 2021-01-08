import { getAll, createArticle, getById, editArticle, deleteById } from "../data.js";
import { addPartials, categoryMap, getUserData, getUserId, mapCategories } from "../util.js";

export async function homePage() {
    await addPartials(this);
    this.partials.article = await this.load('/views/articles/article.hbs');

    const context = mapCategories(await getAll());

    context.user = this.app.userData;
    this.partial('/views/articles/home.hbs', context);
}

export async function createPage() {
    await addPartials(this);

    const context = {
        user: this.app.userData
    };

    this.partial('/views/articles/create.hbs', context);
}

export async function postCreate(ctx) {
    const { title, category, content } = ctx.params;
    try {
        if (title.length == 0 || category.length == 0 || content.length == 0) {
            throw new Error('All fields are required!');
        } else if (categoryMap.hasOwnProperty(category) === false) {
            throw new Error('Invalid category!');
        } else {
            const result = await createArticle({
                title,
                category,
                content
            })
            ctx.redirect('/home');
        }
    } catch (err) {
        alert(err.message);
    }
}

export async function detailsPage(){
    await addPartials(this);

    const article = await getById(this.params.id)
    const context = {
        user: this.app.userData,
        article,
        canEdit: article._ownerId == getUserId()
    }

    this.partial('/views/articles/details.hbs', context);
}

export async function editPage() {
    await addPartials(this);

    const article = await getById(this.params.id);
    if(article._ownerId !== getUserId()) {
        this.redirect('/home')
    } else {
        const context = {
            user: this.app.userData,
            article
        };

        this.partial('/views/articles/edit.hbs', context);
    }

}

export async function postEdit(ctx) {
    const { title, category, content } = ctx.params;
    try {
        if (title.length == 0 || category.length == 0 || content.length == 0) {
            throw new Error('All fields are required!');
        } else if (categoryMap.hasOwnProperty(category) === false) {
            throw new Error('Invalid category!');
        } else {
            const result = await editArticle(ctx.params.id,{
                title,
                category,
                content
            })
            ctx.redirect('/home');
        }
    } catch (err) {
        alert(err.message);
    }
}

export async function deleteArticle(){
    try {
     const id = this.params.id
     const result = deleteById(id);
     this.redirect('/home');
 }
     catch (err) {
         alert(err.message)
     }
 }