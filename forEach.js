"use strict";
let a = ["ant", "bat", "cat", 42];
a.forEach((element) => {
  console.log(element);
});
let soliloquy = "To be, or not to be, that is the question:";
Array.from(soliloquy).forEach(function(character) {
  console.log(character);
});
let arr = [8, 17, 42, 99, 15];
arr.sort((a, b) => a - b );
arr.forEach((number) =>{
  console.log(number);
});
