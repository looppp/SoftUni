export function setUserData(data) {
    sessionStorage.setItem('auth', JSON.stringify(data));

}

export function getUserData() {
    const auth = sessionStorage.getItem('auth');
    if (auth !== null) {
        return JSON.parse(auth);
    } else {
        return null;
    }
}

export function getUserId() {
    const auth = sessionStorage.getItem('auth');
    if (auth !== null) {
        return JSON.parse(auth).localId;
    } else {
        return null;
    }
}

export function objectToArray(data) {
    if (data === null) {
        return [];
    } else {
        return Object.entries(data).map(([key, value]) => Object.assign({
            _id: key
        }, value))
    }
}

export async function addPartials(ctx) {
    const partials = await Promise.all([
        ctx.load('/views/common/header.hbs'),
        ctx.load('/views/common/footer.hbs'),
    ]);

    ctx.partials = {
        header: partials[0],
        footer: partials[1]
    };

}

export const categoryMap = {
    'JavaScript': 'js',
    'C#': 'csharp',
    'Java': 'java',
    'Python': 'python',
}

export function mapCategories(data) {
    const result = {
        js: [],
        csharp: [],
        java: [],
        python: []
    };

    for (let article of data) {
        result[categoryMap[article.category]].push(article);
    }

    return result;
}