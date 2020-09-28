let firstName = process.argv[2];
let lastName = process.argv[3];
console.log ("Hi! " + (firstName + " " + lastName + "."));
console.log ("I am capitalizing your name. " + firstName.toUpperCase())
console.log ("I am getting initials. " + firstName[0] + "." + lastName[0] + ".")
console.log ("I am giving you your email. " + firstName.toLowerCase() + "." + lastName.toLowerCase() + "@codeimmersives.com")
