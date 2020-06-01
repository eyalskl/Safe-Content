'use strict';

function getUsersToShow(key) {
    var json = localStorage.getItem(key)
    var value = JSON.parse(json)
    return value;
}

