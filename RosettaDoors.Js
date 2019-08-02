let arr=[]

var i;

function getFinalOpenedDoors (numDoors) {
  for(i=1;i<=numDoors;i++) {
    arr.push([i,0])
  }
//making the 2d array[[1,0][2,0]]
// 1st part is door no., 2nd part is open or closed

  for(i=1;i<(numDoors);i++) 
  // do it 100 times
  {
    if (arr[i[0]]%i)
    //Struggling with this line.
    //The first time through, visit every door and 'toggle' the door (if the door is closed, open it; if it is open, close it). 
    //The second time, only visit every 2nd door (i.e., door #2, #4, #6, ...) 
    //and toggle it. The third time, visit every 3rd door (i.e., door #3, #6, #9, ...),
    // etc., until you only visit the 100th door.
    {
        if (arr[i[1]]=0) 
        {
            arr[i[1]]=1
        }
        //toggles the door from off to on
        if (arr[i[1]]=1) 
        {
            arr[i[1]]=0
        }
        //toggles the door from on to off

        if (arr[i[1]]=0) {
            arr.splice(i)
        }
        //gets rid of all numbers that are not toggled on.
    }
    return arr;
  }

  //the passes and toggling
}
getFinalOpenedDoors(100)
console.log(arr)