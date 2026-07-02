console.log("It's working :)\n");

function get_computer_choice()
{
  let computers_choice = Math.floor(Math.random() * 4);
  while (1)
  {
    if (puters_choice == 0)                           // since we get zero a lot less number of times than 1, 2, and 3 to get closer to 
    {                                                // an equal probability of getting the number we should ditch zero for an another  
      computers_choice = Math.floor(Math.random() * 4); // number
      continue;
    }
    return computers_choice;
  }
}

