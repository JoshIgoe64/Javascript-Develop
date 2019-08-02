function fizzbuzz() 
{
    for (i=0; i<1000; i++)
    {
        switch(true) {
            case i%3==0&&i%5==0:
            console.log ("FizzBuzz")
            //starts at 0 so first print will be Fizzbuzz
            break;
            case i%3==0:
            console.log("Fizz")
            break;
            case i%5==0:
            console.log("Buzz")
            break;
            default:
            console.log("Num")
        }
    }
}
//start with a fizzbuzz test 
//(if i is a multiple of 3 print fizz or 5 print buzz both=fizzbuzz )
fizzbuzz()