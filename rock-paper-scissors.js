console.log("It's working :)\n");
let n = 25;
let puters_choice = Math.floor(Math.random() * 4);
while (n >= 0)
{
  if (puters_choice == 0)                           // since we get zero a lot less number of times than 1, 2, and 3, to get closer to 
  {                                                // an equal probability of getting the number, we should ditch zero for an another  
    puters_choice = Math.floor(Math.random() * 4); // number
    continue;
  }
  console.log(puters_choice);
  puters_choice = Math.floor(Math.random() * 4);
  n--;
}
/*function get_computer_choice()
{
 eturn math  
}*/
