'use strict';

function onInit() {
    renderPage();
}

function renderPage() {
    var loggedInUser = getLoggedUser()
    var strHtml = '';
    var elNavBar = document.querySelector('.nav-bar');
    var elMagicP = document.querySelector('.magic');
    var elAdminBar = document.querySelector('.admin-link');
    if (loggedInUser) {
        if (loggedInUser.isAdmin) elAdminBar.classList.remove('hide');
        strHtml = `<img src="imgs/secret.png">`
        elNavBar.classList.remove('hide');
        document.querySelector('.logged-user').innerText = getLoggedUserName();
        elMagicP.innerText = 'HA HA HA!'
    } else {
        strHtml = `<input class="username-input" type="text" placeholder="User Name">
        <input class="password-input" type="password" placeholder="Password">
        <button onclick="onDoLogin()">Login</button>`
        elNavBar.classList.add('hide');
        elAdminBar.classList.add('hide');
        elMagicP.innerText = 'Please Login in to see the MAGIC!';
    }
    document.querySelector('.login').innerHTML = strHtml;
}


function onDoLogin() {
    var elUserNameInput = document.querySelector('.username-input');
    var elPassInput = document.querySelector('.password-input');
    var username = elUserNameInput.value;
    var password = elPassInput.value;
    doLogin(username, password);
    renderPage()
    elUserNameInput.value = '';
    elPassInput.value = '';
}

function onDoLogout() {
    doLogout();
    renderPage();
}