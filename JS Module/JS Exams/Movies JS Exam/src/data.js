import { getUserData, getUserId, objectToArray, setUserData } from "./util.js";

const apiKey = 'AIzaSyCfdIEi35xO7aqO1m5Ceyu_wx_8YTrUIdM';
const databaseUrl = 'https://destinations-f7d27-default-rtdb.firebaseio.com/';

const endpoints = {
    LOGIN: `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`,
    REGISTER: `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}`,
    DESTINATIONS: 'destinations',
    DESTINATIONS_BY_ID: 'destinations/'
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
    console.log(responce);

    return responce;
}

export async function createDestination(destination){
    const data = Object.assign({  _ownerId: getUserId() }, destination);
    return post(host(endpoints.DESTINATIONS), data);
}


export async function getById(id){
    const record = await get(host(endpoints.DESTINATIONS_BY_ID + id));
    record._id = id;
    return record
}

export async function getAll(){
    const records = await get(host(endpoints.DESTINATIONS));
    // with sorting the information
    // records.sort((a,b)...)
    return  objectToArray(records);
}

export async function editDestination(id, destination){
    return patch(host(endpoints.DESTINATIONS_BY_ID + id), destination)
}

export async function deleteById(id){
    return del(host(endpoints.DESTINATIONS_BY_ID + id))
}


