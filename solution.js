/*The approach is that i am going to take the prioritized reqs given as gym,school,store  they are 
given in order same as the input. so no need to take any ordering here.
next i will be  using for loops to iterate through the object as they in key:value pair
Then,i am going to use the conditon that if the value is true then add the a value with 1 else add with 0
Here i will be finding the sum and then i will pushing this sum to a array i.e the requirements which are needed 
as per the of us priority of us. If gym and school near your apartment then the sum will be more and the distance 
required to travel will be less. By using this logic that highest sum is the least distance to be travelled.
In order to optimize the  life, the apartment block such that you minimize the farthest distance you'd have to walk
from your apartment to reach any of your required buildings is the no 3 of the given blocks.
 */

  function apartmentHunting(blocks,reqs) {
   a=0 //First i will take the variable that will be used for calculating the sum
   b=[] //finding near bulidings sum
    for (var i in blocks) //for loop over the given object there are 5 objects
    {
        var value = blocks[i]; //taking the  1,2,3,4,5 object using loop
            for (var i in value){  // we are considering inside object
                // console.log(value[i])
                if (value[i]===true){  /*keys are gym,school,store  and values are True,False
                    Here we are checking values of the given keys */
                    a=a+1  //adding if they are near the apartment
                    b.push(a) //pushing the sum to get the highest sum
                }
                else{
                a=0  //if the given value is false i.e the given buildings are far
                b.push(a) //we are also pushing this sum for one specific apartment at a time
                
            }
            
                break //we use break to stop after one building
                
            }
            
    }
    // console.log(b)//
    ma=Math.max.apply(Math,b)   //finding the maximunm sum if sum is maximum then distance travelled will be less
    // console.log(ma)//
    console.log(b.indexOf(ma)+1) //we are printing the index i.e the apartment number as output
}
function result(){

}

blocks=
[
{
"gym": false,
"school": true,
"store": false,
},
{
"gym": true,
"school": false,
"store": false,
},
{
"gym": true,
"school": true,
"store": false,
},
{
"gym": false,
"school": true,
"store": false,
},
{
"gym": false,
"school": true,
"store": true,
},
]
reqs=
["gym","school","store"]
apartmentHunting(blocks, reqs)