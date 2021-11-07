const getSleepHours = day => {
  switch(day){
    case 'monday': return 5; break;
    case 'tuesday': return 7; break;
    case 'wednesday': return 50; break;
    case 'thursday': return 5; break;
    case 'friday': return 4; break;
    case 'saturday': return 3; break;
    case 'sunday': return 2; break;
  }
};
//console.log(getSleepHours('sunday'));
const getActualSleepHours = () => 
getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday') ;
//console.log (getActualSleepHours());
const getIdealSleepHours = () => {
  const idealHours = 8;
  return idealHours * 7;
}

//console.log (getIdealSleepHours());
const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();
  if (actualSleepHours === idealSleepHours) {
    console.log ('You had perfect amount of sleep.');
  } else if (actualSleepHours > idealSleepHours) {
    console.log ('You had more sleep than needed.');
}else {
    console.log ('You should get some rest.');
}
};

calculateSleepDebt();
