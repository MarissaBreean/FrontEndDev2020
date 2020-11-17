/*Dialogue box that first appears upong entering the page*/

alert('Hey You! Welcome to my page. Youll find a feedback form Id love if you could fill out');

/*console message - a silly joke*/
const secsPerMin = 60;
const minsPerHour = 60;
const hoursPerDay = 24;
const daysPerWeek = 7;
const weeksPerYear = 52;

const secondsPerDay = secsPerMin * minsPerHour * hoursPerDay;
console.log(`There are ${secondsPerDay} seconds in a day, and since Code Louisville started Ive been stressing every single one.`);

/* this function is specifically for my feedback form. it creates a function that displays a dialogue box after 
hitting submit that says the message contained in the alert, the return false stops the dialogue box from repeating*/

function myFunction(firstname, lastname) {
    var name = firstname + ' ' + lastname;
    alert("Thank you " + name + " for your feedback!");
    return false;

}