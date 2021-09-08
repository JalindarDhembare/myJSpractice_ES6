/* Ex.01.

function sum(...args)
{
    console.log(args);
}
sum();

//Output: []        */
//--------------------------------------
/* Ex.02.

function sum(...args)
{
    console.log(args);
}
sum(2);

//Output: [2]        */
//--------------------------------------
/* Ex.03.

function sum(...args)
{
    console.log(args);
}
sum(2,4);

//Output: (2) [2, 4]    */   //it print size also.
//--------------------------------------
/* Ex.04.

function sum(...args)
{
    console.log(args);
}
sum(2,4,6,7);
sum(2,4);

//Output: (4) [2, 4, 6, 7]
          (2) [2, 4]            */
//--------------------------------------
/* Ex.05. addition of arguments
function sum(...args)
{
    let sum=0;
    for(let i=0;i<args.length;i++)
    {
        sum=sum+args[i];
    }
    console.log(sum);
}
sum(2,4,8,9);

//Output: 23        */
//--------------------------------------
/*Ex.06.

function Animal(ani1,ani2,ani3,...animals)
{
    console.log(ani1);
    console.log(ani2);
    console.log(ani3);
    console.log(...animals);
}
Animal("cow","dog","tiger","elephant","lion","kangaroo");

//Output: cow
          dog
          tiger
          elephant lion kangaroo        */
//-----------------------------------------          