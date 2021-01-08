import request from './request.js';
import authService from './authService.js';

const baseUrl = 'https://softwiki-5bbbd.firebaseio.com';

const articleUrl = `${baseUrl}/articles.json`;

const urlBuilder = (url) => {

    return `${baseUrl}/${url}.json?auth=${authService.getUserData().idToken}`;
}

export default{
    async createMovie(article) {
        let responce = request.post(urlBuilder('articles'), article)
        console.log(responce);
        return responce;
    }
}


