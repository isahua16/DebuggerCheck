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
