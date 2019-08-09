var count = 0;
function cc(card) 
{
  // Only change code below this line
  switch(card) 
  {
  case card<7:
    return count++;
  case card<10:
    break;
  case card==10||'J'||'Q'||'K'||'A':
    console.log(count--);
    break;
  }
  console.log(count<=0?count+" Hold":count+" Bet");
}

  // Only change code above this line
// Add/remove calls to test your function.
// Note: Only the last will display
cc(3);cc(4);cc(4);