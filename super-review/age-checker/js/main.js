//Create a conditonal that checks their age
//If under 16, tell them they can not drive
//If under 18, tell them they can't hate from outside the club, because they can't even get in
//If under 21, tell them they can not drink
//If under 25, tell them they can not rent cars affordably
//If under 30, tell them they can not rent fancy cars affordably
//If under over 30, tell them there is nothing left to look forward too


//--- Harder
//On click of the h1
//Take the value from the input
//Place the result of the conditional in the paragraph
function performanceTest(){
          let sLen = 30;
          let loops = 500000; // YOU MAY NOT CHANGE THE NUMBER OF LOOPS IN ANY WAY !!
          let someLongDataString = "";
          let source = "X" * 30;

            // DO NOT CHANGE THE ACTUAL FOR LOOP IN ANY WAY !!
            // in other words, you may not change: for (INITIALIZATION; CONDITION; INCREMENT/DECREMENT)
            for (var i = 0; i < loops; i++) 
            {
                 someLongDataString = source.Concat(Enumerable.Repeat(source, loops)); //will multiply the string and concatenate it here then break out of the loop
                break;
            }
        }