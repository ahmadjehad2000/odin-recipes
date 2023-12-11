function playRound(playerSelection, computerSelection) {

  if (playerSelection == "rock" && computerSelection == "paper"){
      return "Computer Won"
  }
   if (playerSelection == "scissors" && computerSelection == "rock"){
      return "Computer Won"
  }
  if (playerSelection == "paper" && computerSelection == "scissors"){
      return "Computer Won"
  }
  if (playerSelection == "paper" && computerSelection == "rock"){
      return "Player Won"
  }
  if (playerSelection == "rock" && computerSelection == "scissors"){
      return "Player Won"
  }
   if (playerSelection == "scissors" && computerSelection == "paper"){
      return "Player Won"
  }

  if (playerSelection == computerSelection){
      return "Draw"
  }
 
}
const list = ["rock","paper","scissors"]
const random = Math.floor(Math.random() * list.length);
const playerSelection = "paper";
const computerSelection = list[random];
console.log(playRound(playerSelection, computerSelection));
