'use strict';

function onInit() {
    checkIsAdmin();
    renderUsersTable();
}

function renderUsersTable() {
    var elTableDis = document.querySelector('.users-table');
    var elTableHead = document.querySelector('thead');
    var elCardsDis = document.querySelector('.users-cards');
    if (gDisplayMode === 'table') {
        var strHTMLs = gUsersToShow.map(user => {
            return `<tr>
        <td>${user.username}</td>
        <td>${user.password}</td>
        <td>${formatTime(user.lastLoginTime)}</td>
        <td>${user.isAdmin}</td>
        </tr>`
        })
        elTableDis.innerHTML = strHTMLs.join('');
        elCardsDis.innerHTML = '';
        elTableHead.hidden = '';
    } else {
        var strHTMLs = gUsersToShow.map(user => {
            return `<div class="card">
            <p>${user.username}</p>
            <p>Password :${user.password}</p>
            <p>Was Logged On : ${formatTime(user.lastLoginTime)}</p>
            <p>Admin : ${user.isAdmin}</p>
            <img src="${user.imgUrl}" />
            </div>`
        });
        elCardsDis.innerHTML = strHTMLs.join('');
        elTableDis.innerHTML = '';
        elTableHead.hidden = true;
    }
}


function onSetDisplayMode(btnId) {
    setDisplayMode(btnId);
    document.querySelector('#table').classList.toggle('mode');
    document.querySelector('#cards').classList.toggle('mode');
    renderUsersTable();
}

function checkIsAdmin() {
    var currLoggedUser = getLoggedInUser()
    if (!currLoggedUser || !currLoggedUser.isAdmin) {
        window.location.href = 'index.html';
    }
}