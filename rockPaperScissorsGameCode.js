const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock'|| userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb' ) {
    return userInput;
  } else {
    console.log('error!!!');
  } 
}
//getUserChoice('ROCK');
const getComputerChoice = () => {
  var choice = Math.floor(Math.random() * 3);
  switch (choice){
    case 0: return 'rock'; break; 
    case 1: return'paper'; break;
    case 2: return 'scissors'; break;
    default: return('invalid'); break;
  }
}
//getComputerChoice();
const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice){
    return 'The Game is a tie!!!';
  }
  if (userChoice === 'bomb'){
    return 'You won';
  }
  if (userChoice === 'rock'){
    if (computerChoice === 'paper'){
      return 'Computer won';
    }else {
      return'You won';
    }
  }
  if (userChoice === 'paper'){
    if (computerChoice === 'scissors'){
      return'Computer won';
    }else {
      return'You won';
    }
  }
  if (userChoice === 'scissors'){
    if (computerChoice === 'rock'){
      return'Computer won';
    }else {
      return'You won';
    }
  }
}
//console.log(determineWinner('scissors', 'scissors'));
const playGame = () => {
 const userChoice = getUserChoice('paper');
  const computerChoice = getComputerChoice();
  console.log('You chose: ' + userChoice);
  console.log('Computer chose: ' + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
}

playGame();