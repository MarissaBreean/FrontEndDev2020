alert('Hey You! Welcome to my page. Youll find a feedback form Id love if you could fill out');


const secsPerMin = 60;
const minsPerHour = 60;
const hoursPerDay = 24;
const daysPerWeek = 7;
const weeksPerYear = 52;

const secondsPerDay = secsPerMin * minsPerHour * hoursPerDay;
console.log(`There are ${secondsPerDay} seconds in a day, and since Code Louisville started Ive been stressing every single one.`);

//document.getElementById("myForm").addEventListener("submit", myFunction)

function myFunction(firstname, lastname) {
    var name = firstname + ' ' + lastname;
    alert("Thank you " + name + " for your feedback!");
    return false;

}

//document.getElementById("myForm").removeEventListener("submit", myFunction)