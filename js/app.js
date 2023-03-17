let username = "Isael";
let user_age = 29;
let is_member = true;

if (username === "admin" || (user_age >= 30 && is_member === true) ) {
    console.log("This is a special greeting!");
} else {
    console.log("This is your standard greeting...");
}

console.log(`Hello, ${username}!`);
console.log(`You are: ${user_age} years old`);

let max_volume = 10.2;
let current_volume = 3.8;

console.log(max_volume / current_volume);
console.log((max_volume / current_volume) * 100);

let usernames = [`hello`, `bonjour`, `hola`, `ciao`, `hallo`];

let user_ages = [10, 12, 24, 45, 67];

let first_user_name = usernames[0];
let last_user_name = usernames[4];
let middle_user_age = user_ages[2];


usernames.push(`ola`);
user_ages.push(50);

let last_user_age = user_ages.pop();

let array_length = usernames.length;

let username_fun = usernames[usernames.length-1];
