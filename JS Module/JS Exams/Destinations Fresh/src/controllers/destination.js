import { addPartials, getUserId } from '../util.js'
import { getAll, getById, createDestination, editDestination, deleteById} from '../data.js'
import { showSuccess, showError } from '../notifications.js';

export async function homePage() {
    await addPartials(this);

    this.partials.destination = await this.load('/views/destinations/destination.hbs');
    const context = { destinations: await getAll() }
    context.user = this.app.userData;
    console.log(context);

    this.partial('/views/destinations/home.hbs', context);
}

export async function createPage() {
    await addPartials(this);

    const context = {
        user: this.app.userData
    };

    this.partial('/views/destinations/create.hbs', context);
}

export async function postCreate(ctx) {
    const { destination, city, duration, departureDate, imgUrl } = ctx.params;
    try {
        if (destination.length == 0 || city.length == 0 || duration.length == 0 || departureDate.length == 0 || imgUrl.length == 0) {
            throw new Error('All fields are required!');
        } else if (duration <= 0 || duration >= 101) {
            throw new Error('Invalid durotation!');
        } else {
            const result = await createDestination({
                destination,
                city,
                duration,
                departureDate,
                imgUrl
            })
            showSuccess('Destination created successfully!')
            ctx.redirect('/home');
        }
    } catch (err) {
        showError(err.message);
    }
}

export async function detailsPage() {
    await addPartials(this);

    const destination = await getById(this.params.id)
    const context = {
        user: this.app.userData,
        destination,
        canEdit: destination._ownerId == getUserId()
    }

    this.partial('/views/destinations/details.hbs', context);
}

export async function destinationsPage() {
    await addPartials(this);

    const ownersDestinations = await getAll();
    const filtered = ownersDestinations.filter(x => x._ownerId === getUserId());

    const context = { destinations: filtered }
    context.user = this.app.userData;


    this.partial('/views/destinations/dashboard.hbs', context);
}

export async function editPage() {

    await addPartials(this);

    const destination = await getById(this.params.id);
    if (destination._ownerId !== getUserId()) {
        this.redirect('/home')
    } else {
        const context = {
            user: this.app.userData,
            destination
        };

        this.partial('/views/destinations/edit.hbs', context);

    }
}


export async function postEditPage(ctx) {
    const { destination, city, duration, departureDate, imgUrl } = ctx.params;
    try {
        if (destination.length == 0 || city.length == 0 || duration.length == 0 || departureDate.length == 0 || imgUrl.length == 0) {
            throw new Error('All fields are required!');
        } else if (duration <= 0 || duration >= 101) {
            throw new Error('Invalid durotation!');
        } else {
            console.log(ctx.params.id);
            const result = await editDestination(ctx.params.id, {
                destination,
                city,
                duration,
                departureDate,
                imgUrl
            })
            showSuccess('Destination was edited succesesfully')
            ctx.redirect('/home');
        }
    } catch (err) {
        showError(err.message);
    }
}


export async function deleteDestination(){
    try {
     const id = this.params.id
     const result = deleteById(id);
     showSuccess('The destinations was deleted successesfully');
     this.redirect('/home');
 }
     catch (err) {
        showError(err.message)
     }
 }