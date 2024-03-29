import { getUserData, getUserId, objectToArray, setUserData } from "./util.js";

const apiKey = 'AIzaSyAoWKKVOmA-BhN8qAnMQ9Sn3eeDRgdTfbE';
const databaseUrl = 'https://softwiki-5bbbd.firebaseio.com/';

const endpoints = {
    LOGIN: `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`,
    REGISTER: `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}`,
    ARTICLES: 'articles',
    ARTICLES_BY_ID: 'articles/'
}

function host(url) {
    let result =  databaseUrl + url + '.json';
    const auth = getUserData();
    if(auth != null) {
        result += `?auth=${auth.idToken}`;
    }
    return result 
}

async function request(url, method, body) {
    let options = {
        method,
    };

    if(body) {
        Object.assign(options, {
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(body)
        });
    }

    let response = await fetch(url, options);

    let data = await response.json();

    //geting errors
    if(data && data.hasOwnProperty('error')){
        const message = data.error.message;
        throw new Error(message);
    }
    return data
}

async function get(url) {
    return request(url, 'GET');
}
async function post(url, body) {
    return request(url, 'POST', body);
}
async function del(url) {
    return request(url, 'DELETE');
}
async function patch(url, body) {
    return request(url, 'PATCH', body);
}

export async function login(email, password) {
    let responce = await post(endpoints.LOGIN, {
        email,
        password,
        returnSecureToken: true,
    });

     setUserData(responce);

     return responce;
}

export async function register(email, password) {
    let responce = await post(endpoints.REGISTER, {
        email,
        password,
        returnSecureToken: true,
    });

    setUserData(responce);

    return responce;
}

export async function createArticle(article){
    const data = Object.assign({  _ownerId: getUserId() }, article);
    return post(host(endpoints.ARTICLES), data);
}

export async function getById(id){
    const record = await get(host(endpoints.ARTICLES_BY_ID + id));
    record._id = id;
    return record
}

export async function getAll(){
    const records = await get(host(endpoints.ARTICLES));
    // with sorting the information
    // records.sort((a,b)...)
    return  objectToArray(records);
}

export async function editArticle(id, article){
    return patch(host(endpoints.ARTICLES_BY_ID + id), article)
}

export async function deleteById(id){
    return del(host(endpoints.ARTICLES_BY_ID + id))
}
