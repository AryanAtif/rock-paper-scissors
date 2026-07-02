
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
    console.log("Computers Choice: " + computers_choice + "\n");
    if (computers_choice == 1) {console.log ( "rock\n");}
    else if (computers_choice == 2) {console.log ( "paper\n");}
    else if (computers_choice == 3) {console.log ( "scissors\n");}
    return computers_choice;
  }
}

function get_human_choice()
{
 let user_choice = prompt("Enter your choice: ");
 console.log ("You entered: " + user_choice + "\n");
 return assign_int (user_choice);
}

function assign_int (choice)
{
  let lower_choice = choice.toLowerCase();
  switch (lower_choice)
  {
    case "rock":
      return 1;
    case "paper":
      return 2;
    case "scissors":
      return 3;
    default:
      console.log("Make sure you entered either \"rock\", \"paper\", or \"scissors\"\n.");
      return -1;
  }
}
function play_round ()
{
  let human_selection= get_human_choice ();
  let computer_selection = get_computer_choice ();
 
  let score = get_score(human_selection, computer_selection);

  if (score == -1) { }  
 
  else if (score == 0)
  {
    console.log("It was a draw!\n");  
  }
  else if (score == 1)
  {
    console.log("You Won :\)\n");  
  }
  else if (score == 2)
  {
    console.log("You Lost :\(\n");  
  }
  console.log("Current Score: You:" + human_score + " Your Opponent: " + computer_score + "\n");
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

function play_game ()
{
  play_round ();
  play_round ();
  play_round ();
  play_round ();
  play_round ();
}

 /**** 
 * Main Program Execution
 ****/
console.log("It's working :)\n");

let computer_score = 0, human_score = 0;

play_game ();
