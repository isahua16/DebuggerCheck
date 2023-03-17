let username = "isael";
let user_age = 30;
let is_member = true;

if (username === "admin" || (user_age >= 30 && is_member === true) ) {
    console.log("This is a special greeting!");
} else {
    console.log("This is your standard greeting...");
}

console.log(`Hello! ${username}`);
console.log(`You are: ${user_age} years old`);

let max_volume = 10.2;
let current_volume = 3.8;

console.log(max_volume / current_volume);
console.log((max_volume / current_volume) * 100);

let usernames = [`hello`, `bonjour`, `hola`, `ciao`, `hallo`];

let user_ages = [10, 12, 24, 45, 67];