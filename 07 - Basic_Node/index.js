// Done in class!!

console.log("Hello world");
const sw = require("star-wars-quotes");
const superheroes = require('superheroes');
const supervillains = require('supervillains');
console.log(sw());

console.log("There´s a building on fire!! Who's gonna save us??!?!?!?");
console.log(superheroes.random()+ " is coming!!!");


console.log("Oh no but there comes " + supervillains.random()+ "! BE CAREFULL!!");


/*
const fs = require("fs");

fs.readFile("input.txt", "utf-8", (err,fd) =>{
    console.log("error: "+ err);
    console.log("Content of file: " + fd);

});
*/