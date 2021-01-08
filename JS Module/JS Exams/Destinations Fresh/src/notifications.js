const elements = {
    success: document.querySelector('#successBox'),
    error: document.querySelector('#errorBox'),
    load: document.querySelector('#loadingBox')
};

elements.success.addEventListener('click', hideSuccess);
elements.error.addEventListener('click', hideError);
elements.load.addEventListener('click', hideLoad);

export function showSuccess(message) {
    elements.success.textContent = message;
    elements.success.parentElement.style.display = 'block';

    setTimeout(hideSuccess, 3000);
}

export function showError(message) {
    elements.error.textContent = message;
    elements.error.parentElement.style.display = 'block';

    setTimeout(hideError, 3000);
}

export function showLoad(message) {
    elements.error.textContent = message;
    elements.error.parentElement.style.display = 'block';

    setTimeout(hideLoad, 3000);
}

function hideSuccess() {
    elements.success.parentElement.style.display = 'none';
}

function hideError() {
    elements.error.parentElement.style.display = 'none';
}

function hideLoad() {
    elements.error.parentElement.style.display = 'none';
}