let film = prompt("What's your favourite movie?");
alert(`My favourite movie is ${film}`);

let txt = prompt("Enter a number!");
let numar = Number(txt);
console.log(numar);
if (isNaN(numar)) {
  alert("This is not a number!");
} 
else 
    if (numar > 16) {
        alert(`You are eligible`);
    } 
    else {
        alert(`You must be at least 16 years old. It seems you are ${numar}`);
    }
