'use strict'

const footer = document.querySelector('.footer');
const header = document.querySelector('.header');
const links = document.querySelector('.header');

function setLightTheme() {
    document.body.style.backgroundColor = '#E2F1F8';
    document.body.style.color = '#000';
    header.style.backgroundColor = '#B0BEC5';
    header.style.borderColor = '#839198';
    footer.style.backgroundColor = '#B0BEC5';
    footer.style.borderColor = '#839198';
}

function setDarkTheme() {
    document.body.style.backgroundColor = '#484848';
    document.body.style.color = '#fff';
    header.style.backgroundColor = '#212121';
    header.style.borderColor = '#000';
    footer.style.backgroundColor = '#212121';
    footer.style.borderColor = '#000';
}

function setBackendlessheme() {
    document.body.style.backgroundColor = '#A4A4A4';
    document.body.style.color = '#fff';
    header.style.backgroundColor = '#757575';
    header.style.borderColor = '#6D6D6D';
    footer.style.backgroundColor = '#757575';
    footer.style.borderColor = '#6D6D6D';
}

// input 

let lightThemeInp = document.getElementById('light-theme');
let darkThemeInp = document.getElementById('dark-theme');
let backendlessThemeInp = document.getElementById('backendless-theme');

lightThemeInp.addEventListener('change', () => {
    return setLightTheme();
});

darkThemeInp.addEventListener('change', () => {
    return setDarkTheme();
});

backendlessThemeInp.addEventListener('change', () => {
    return setBackendlessheme();
});

// btn 

const lightThemeBtn = document.querySelector('.light-theme-btn');
const darkThemeBtn = document.querySelector('.dark-theme-btn');
const backendlessThemeBtn = document.querySelector('.backendless-theme-btn');

lightThemeBtn.addEventListener('click', () => {
    return setLightTheme();
});

darkThemeBtn.addEventListener('click', () => {
    return setDarkTheme();
});

backendlessThemeBtn.addEventListener('click', () => {
    return setBackendlessheme();
});

// select 

const select = document.getElementById('select-theme');

function changeTheme() {
    if (select.value === 'light-theme') {
        return setLightTheme();
    }
    if (select.value === 'dark-theme') {
        return setDarkTheme();
    }
    if (select.value === 'backendless-theme') {
        return setBackendlessheme();
    }
}

// modal window

const imgBlock = document.querySelector('.img-block');

imgBlock.addEventListener('click', event => {
    if (event.target.classList.contains('img')) {
        alert('Click!');
    } else {
        return;
    }
});