import request from './request.js';

const apKey = "AIzaSyAoWKKVOmA-BhN8qAnMQ9Sn3eeDRgdTfbE";

let endPoints = {
    login: `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apKey}`,
    register: `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apKey}`,
}

export default {
    async login(email, password) {
        let responce = request.post(endPoints.login, {
            email,
            password,
        });

        return responce;
    },

    async register(email, password){
        let responce = request.post(endPoints.register, {
            email,
            password,
        });

        return responce;
    },

  
    getUserData() {
        try {
            let data = JSON.parse(localStorage.getItem('auth'));

            return {
                isAuthenticated: Boolean(data.idToken),
                email: data.email,
                idToken: data.idToken
            };
        } catch (error) {
            return {
                isAuthenticated: false,
                email: ''
            };
        } 
    },
    logout() {
        localStorage.setItem('auth', '');
    }
}