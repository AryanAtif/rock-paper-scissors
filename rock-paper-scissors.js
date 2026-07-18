
function get_computer_choice()
{
  let computers_choice = Math.floor(Math.random() * 4);
  while (1)
  {
    if (computers_choice == 0)                           // since we get zero a lot less number of times than 1, 2, and 3 to get closer to 
    {                                                // an equal probability of getting the number we should ditch zero for an another  
      computers_choice = Math.floor(Math.random() * 4); // number
      continue;
    }
    console.log("Computers Choice: ");
    if (computers_choice == 1) {console.log ( "rock\n");}
    else if (computers_choice == 2) {console.log ( "paper\n");}
    else if (computers_choice == 3) {console.log ( "scissors\n");}
    return computers_choice;
  }
}

function assign_int (choice)
{
  console.log (`assign_int() recieved:  ${choice} \n`);
  if (choice === "rock") return 1;
  else if (choice === "paper") return 2;
  else if (choice === "scissors") return 3;
  else
  {
    console.log("Make sure you entered either \"rock\", \"paper\", or \"scissors\"\n.");
    return -1;
  }
}

function reassign_str (choice) // opposite of the above function
{
  console.log (`reassign_str() recieved:  ${choice} \n`);
  if (choice === 1) return "ROCK";
  else if (choice === 2) return "PAPER";
  else if (choice === 3) return "SCISSORS";
}

function get_score ( human_selection, computer_selection)
{
  selection_difference = human_selection - computer_selection;
  if (selection_difference == 0)
  {
    return 0; // draw
  }
  else if (selection_difference == 1 || selection_difference == -2 )
  {
    human_wins++; // human won
    return 1;
  }
  else if (selection_difference == -1 || selection_difference == 2 )
  {
    computer_wins++; // computer won
    return 2;
 } 
}

function remove_previous_result()
{

  let score_board = document.querySelector(".score_board");
  score_board.remove();
}

function display_result (human_selection, computer_selection, winner)
{
  if (rounds_played >= 1) remove_previous_result ();

  let game = document.querySelector (".game");

  let score_board = document.createElement("div");
  score_board.classList.add ("score_board");
  game.appendChild (score_board);

  let result = document.createElement ("div");
  result.classList.add ("result");
  score_board.appendChild(result);

  let result_title = document.createElement ("h3");
  result_title.classList.add ("result_title");
  result.appendChild(result_title);
  
  let result_subtext = document.createElement ("p");
  result_subtext.classList.add ("result_subtext");
  result.appendChild(result_subtext);

  let choices = document.createElement ("p");
  score_board.appendChild(choices);
  
  let score = document.createElement("div");
  score.classList.add ("score");
  score_board.appendChild(score);

  let human_score = document.createElement("p");
  score.appendChild(human_score);

  let computer_score = document.createElement("p");
  score.appendChild(computer_score);
  
  if (winner == "human")
  {
    result_title.textContent = "You Won!";
    human_selection = reassign_str (human_selection); 
    computer_selection= reassign_str (computer_selection); 
    result_subtext.textContent = `${human_selection} beats ${computer_selection}`;
    choices.textContent = `You chose: ${human_selection}, Computer chose ${computer_selection}`;
    human_score.textContent = `Your score : ${human_wins}`;
    computer_score.textContent = `Computer score: ${computer_wins}`;
  }
  else if (winner == "computer")
  {
    result_title.textContent = "You Lost!";
    human_selection = reassign_str (human_selection); 
    computer_selection= reassign_str (computer_selection); 
    result_subtext.textContent = `${computer_selection} beats ${human_selection}`;
    choices.textContent = `You chose: ${human_selection}, Computer chose ${computer_selection}`;
    human_score.textContent = `Your score : ${human_wins}`;
    computer_score.textContent = `Computer score: ${computer_wins}`;
  }
  else
  {
    result_title.textContent = "It was a draw!";
    human_selection = reassign_str (human_selection); 
    computer_selection= reassign_str (computer_selection); 
    result_subtext.textContent = `${human_selection} can't beat itself `;
    choices.textContent = `You chose: ${human_selection}. Computer chose ${computer_selection}`;
    human_score.textContent = `Your score : ${human_wins}`;
    computer_score.textContent = `Computer score: ${computer_wins}`;
  }

}

function play_round (human_selection, computer_selection)
{
  let score = get_score(human_selection, computer_selection);
  if (score == -1) { }  
 
  else if (score == 0)
  {
    console.log("It was a draw!\n");  
    display_result (human_selection, computer_selection, 0);
  }
  else if (score == 1)
  {
    console.log("You Won :\)\n");  
    display_result (human_selection, computer_selection, "human");

  }
  else if (score == 2)
  {
    console.log("You Lost :\(\n");  
    display_result (human_selection, computer_selection, "computer");
  }
  console.log("Current Score: You:" + human_wins + " Your Opponent: " + computer_wins + "\n");
  rounds_played++;
}

function init_game ()
{
  const buttons = document.querySelectorAll("button");
  buttons.forEach ((button) =>
  { // human choice = button.id
    button.addEventListener ("click", () => play_round (assign_int(button.id), get_computer_choice()))
  })

}

 /**** 
 * Main Program Execution
 ****/

console.log("It's working :)\n");

let computer_wins = 0, human_wins= 0;
let rounds_played = 0;
/* Create UI */
init_game();

