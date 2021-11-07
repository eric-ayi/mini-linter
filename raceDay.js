let raceNumber = Math.floor(Math.random() * 1000);

let runnerRegisteredEarly = false;
let runnerAge = 16;

if (runnerAge > 18 && runnerRegisteredEarly){
  raceNumber += 1000;
 }
if (runnerAge > 18 && runnerRegisteredEarly){
  raceNumber += 1000;
  console.log(raceNumber);
  console.log('You will race at 9:30 am. ');
}else if (runnerAge > 18 && !runnerRegisteredEarly){
  console.log(raceNumber);
  console.log('You will race at 11:00 am. ');
} else if (runnerAge < 18) {
  console.log(raceNumber);
  console.log('You will race at 12:30 pm.');
}else {
  console.log('See the registration desk');
}




