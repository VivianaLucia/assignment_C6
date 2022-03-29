let yourName = prompt("what's your name?");
let yourAge = prompt("What's your age?");
let d = new Date;
let bornYear = d.getFullYear() - yourAge;

console.log(`Hello ${yourName}, I’m only a console but it’s nice to meet you.\n
- I’ve heard you are ${yourAge} of age, that means you were born in ${bornYear}`);