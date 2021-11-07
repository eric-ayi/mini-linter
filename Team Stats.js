const team = {
    _players : [{
    firstName: 'Pablo',
    lastName: 'Sanchez',
    age: 11
  },{
    firstName: 'Eric',
    lastName: 'Cantona',
    age: 20
  },{
    firstName: 'Steve',
    lastName: 'Seagal',
    age: 16
  }],
    _games : [
      {
    opponent: 'Broncos',
    teamPoints: 42,
    opponentPoints: 17
  },{
    opponent: 'Styles',
    teamPoints: 45,
    opponentPoints: 26
  },{
    opponent: 'Lions',
    teamPoints: 40,
    opponentPoints: 22
  }
    ],
    get players(){
     return this._players;
   }, 
   get games(){
     return this._games;
   },
   addPlayer(firstName, lastName, age){
     // you have to create a new object and store the received input.
     let player = {
       firstName: firstName,
        lastName: lastName,
        age: age
     };
     this.players.push(player);
   },
   addGame(opponentName, teamPoint, opponentPoint){
     let game = {
       opponent: opponentName,
        teamPoints: teamPoint,
        opponentPoints: opponentPoint
     };
     this.games.push(game);
  
   }
   
  };
  team.addPlayer('Steph', 'Curry', 28);
  
  team.addGame('Titans', 100, 98);
  console.log(team._games);
  
  
  