import {addPartials, deleteUser} from '../util.js'
import { register, login } from "../data.js";
import { showSuccess, showError } from '../notifications.js';



export async function registerPage() {
    await addPartials(this);
    this.partial('/views/users/register.hbs');
}

export async function loginPage() {
    await addPartials(this);
    this.partial('/views/users/login.hbs');
}

export async function postRegister(ctx) {
    const { email, password, rePassword } = ctx.params;
    try {
        if (email.length == 0 || password.length == 0) {
            throw new Error('All fields are required!');
        } else if (password !== rePassword) { 
            throw new Error('Passwords dont match!');
        } else {
            const result = await register(email, password);
            ctx.app.userData = result;
            showSuccess('Successfuly created account!')
            ctx.redirect('/home');
        }
    } catch (err) {
        showError(err.message);
    }
  
}

export async function postLogin(ctx) {
    const { email, password } = ctx.params;
    try {
        if (email.length == 0 || password.length == 0) {
            throw new Error('All fields are required!');
        } else {
            const result = await login(email, password);
            ctx.app.userData = result;
            showSuccess('Successfuly logged in')
            ctx.redirect('/home');
        }
    } catch (err) {
        showError(err.message);
    }
}

export async function getLogout() {
    deleteUser();
    this.app.userData = null;
    showSuccess('Bye Bye...')
    this.redirect('/login')
}