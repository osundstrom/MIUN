"use strict";

//divForClock kopplas till element med id clockDiv
let divForClock = document.getElementById("clockDiv"); 

//Körs då sidan laddas in.
window.onload = clock();

//Funktion för klocka
function clock(){

    let newDate = new Date();
    let hours = newDate.getHours();
    let minutes = newDate.getMinutes();

    if (hours < 10) {
        hours = "0" + hours;
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    let time = `${hours}:${minutes}`;


    console.log(time);

    
    let textForClock = document.createTextNode(time);
    divForClock.appendChild(textForClock);
    
}

