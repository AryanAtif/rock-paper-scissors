
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
  if (choice === 1) return "rock";
  else if (choice === 2) return "paper";
  else if (choice === 3) return "scissors";
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
    human_score++; // human won
    return 1;
  }
  else if (selection_difference == -1 || selection_difference == 2 )
  {
    computer_score++; // computer won
    return 2;
 } 
}
function display_result (human_selection, computer_selection, winner)
{
  let score_board = document.createElement("div");
  score_board.classList.add ("score board");
  document.body.appendChild (score_board);

  let result = document.createElement ("h3");
  result.classList.add ("result");
  score_board.appendChild(result);

  let result_subtext = document.createElement ("p");
  result_subtext.classList.add ("result_subtext");
  score_board.appendChild(result_subtext);

  let human_score = document.createElement("p");
  human_score.classList.add ("human_score");
  score_board.appendChild(human_score);

  let computer_score = document.createElement("p");
  computer_score.classList.add ("computer_score");
  score_board.appendChild(computer_score);
  
  if (winner == "human")
  {
    result.textContent = "You Won!";
    human_selection = reassign_str (human_selection); 
    computer_selection= reassign_str (computer_selection); 
    result_subtext.textContent = `${human_selection} beats ${computer_selection}`;
  }
  else if (winner == "computer")
  {
    result.textContent = "You Lost!";
    human_selection = reassign_str (human_selection); 
    computer_selection= reassign_str (computer_selection); 
    result_subtext.textContent = `${computer_selection} beats ${human_selection}`;
  }
  else
  {
    result.textContent = "It was a draw!";
    human_selection = reassign_str (human_selection); 
    computer_selection= reassign_str (computer_selection); 
    result_subtext.textContent = `${human_selection} can't beat itself`;
  }

}

function play_round (human_selection, computer_selection)
{
  let score = get_score(human_selection, computer_selection);
  if (score == -1) { }  
 
  else if (score == 0)
  {
    remove_previous_result ();
    display_result (human_selection, computer_selection, 0);
    console.log("It was a draw!\n");  
  }
  else if (score == 1)
  {
    display_result (human_selection, computer_selection, "human");
    console.log("You Won :\)\n");  
  }
  else if (score == 2)
  {
    console.log("You Lost :\(\n");  
    display_result (human_selection, computer_selection, "computer");
  }
  console.log("Current Score: You:" + human_score + " Your Opponent: " + computer_score + "\n");
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

let computer_score = 0, human_score = 0;

/* Create UI */
init_game();

