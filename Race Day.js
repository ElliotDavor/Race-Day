
/*
Codecademy’s annual race is just around the corner! This year, we have a lot of participants. 
You have been hired to write a program that will 
register runners for the race and give them instructions on race day.
*/
let raceNumber = Math.floor(Math.random() * 1000);
const registeredEarly=true;
const age = 5;

 if ( age >18 &&  registeredEarly===false){
   raceNumber +=1000;
  console.log(`${raceNumber}`);
 }
if (age >18 && registeredEarly===false){
  console.log(`The race number ${raceNumber} will start at 9:30 am `)
} else if (age>18 && !registeredEarly===false){
  console.log(`Your race with the number ${raceNumber} will start at 11.00 am`)
} else if (age <= 18){
  console.log(`Your race number ${raceNumber} starts at 12:30pm`)
}
else {
  console.log('Please see the registration desk for details of registration')
}
