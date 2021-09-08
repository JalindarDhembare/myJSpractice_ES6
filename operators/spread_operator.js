/* Ex.01.

let arr1=[1,2,3];
let arr2=[4,5,...arr1]
console.log(arr2);

//Output: (5) [4, 5, 1, 2, 3]       */
//------------------------------------
/* Ex.02.

let arr1=[1,2,3];
let arr2=[...arr1,4,5]
console.log(arr2);

//Output: (5) [1, 2, 3, 4, 5]       */
//------------------------------------
/* Ex.03.

let arr1=[1,2,3];
let arr2=[2,4,5,...arr1,7,9,2]
console.log(arr2);

//Output: (9) [2, 4, 5, 1, 2, 3, 7, 9, 2]       */
//-------------------------------------------------
/* Ex.04. adding array

let arr1=[1,2,3];
let arr2=[4,5,6,7,]
let arr3=[...arr1,...arr2];
console.log(arr3);

//Output: (7) [1, 2, 3, 4, 5, 6, 7]         */
//-------------------------------------------------
/* Ex.05. copy of the object..!!

let person ={
            fistname:"ganesh",
            age:20
            };
let Copyofobject={...person};
person.age=30;
console.log("The person: ",person);      
console.log("Copy of object: ",Copyofobject);  

//Output: The person:  {fistname: 'ganesh', age: 30}
          Copy of object:  {fistname: 'ganesh', age: 20}       */
//------------------------------------------------------------