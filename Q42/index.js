"use strict";
function showMagicians(magicians) {
    for (let magician of magicians) {
        console.log(magician);
    }
}
function makeGreat(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = `the Great ${magicians[i]}`;
    }
}
// Creating an array of magician names
const magicians = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];
// Calling the function to make the magicians great
makeGreat(magicians);
// Calling the function to show the modified magicians
showMagicians(magicians);
