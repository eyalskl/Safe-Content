'use strict';

if (!gLoggedInUser) var gLoggedInUser = getUsersToShow('loggedInUser');
var gUsers = _createUsers();
gUsers[0].isAdmin = true; // setting Eyal admin
_saveUsers('users', gUsers);

function _createUsers() {
    var names = ['Eyal', 'Yossi', 'Shlomi'];
    var users = names.map(_createUser);
    return users;
}

function _createUser(username) {
    var user = {
        username: username,
        password: 12345,
        imgUrl: `imgs/${username}.png`,
        lastLoginTime: Date.now(),
        isAdmin: false
    }
    return user;
}

function _saveUsers(key, value) {
    var json = JSON.stringify(value);
    localStorage.setItem(key, json)
}

function doLogin(userName, password) {
    var user = gUsers.find(user => user.username === userName && user.password === +password)
    console.log('user:', user)
    if (!user) return;
    user.lastLoginTime = Date.now();
    gLoggedInUser = user;
    _saveUsers('loggedInUser', gLoggedInUser)
}

function doLogout() {
    gLoggedInUser = null;
    localStorage.removeItem('loggedInUser');
}

function getLoggedUserName() {
    return gLoggedInUser.username + '!';
}
function getLoggedUser() {
    return gLoggedInUser;
}