const name = prompt("Please enter your name:");


let gender;
while (true) {
  gender = prompt("Please enter your gender (male or female):").toLowerCase();
  if (gender === "male" || gender === "female") {
    break;
  }
}

let age = prompt("Please enter your age:");
while (age <= 0) {
  alert("Invalid age. Please enter a positive number.");
  age = prompt("Please enter your age:");
}

let skipWelcome = confirm("Do you want to skip the welcoming message?");

if (!skipWelcome) {
    let title = "Mr.";
    let name = "John Doe";
    
    alert(`Welcome to our website, ${title} ${name}!`);
}