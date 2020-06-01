'use strict';

var gUsersToShow = getUsersToShow('users');
var gDisplayMode = 'table';


function setDisplayMode(displayMode) {
    gDisplayMode = displayMode;
}

function getLoggedInUser() {
    return getUsersToShow('loggedInUser')
}
