/* Ex.01.

let book=["Adv. JS",450,150];
let[name,page,price]=book;
console.log(name);
console.log(page);
console.log(price);

//Output:
Adv. JS
450
150                     */
//---------------------------------------
/* Ex.02.

let arr=["hello","world"];
let[first,second]=arr;
console.log(first);
console.log(second);

//Output:
hello
world                   */
//---------------------------------------
/* Ex.03.

let book=["Adv. JS",450,150];
let[name,page,price,publication]=book;
console.log(publication);

//Output: undefined     */
//---------------------------------------
/* Ex.04.

let book=["Adv. JS",  ,450,150];
let[name,page,price,publication]=book;
console.log(page);

//Output: undefined     */
//---------------------------------------
/* Ex.05.

let book=["Adv. JS",  ,450,150];
let[name,page=500,price,publication]=book;      //default value.
console.log(page);

//Output: 500           */
//---------------------------------------
/* Ex.06.

let book=["Adv. JS",450,150];
let[name,pages=500,price]=book;     //not cosider default value.
console.log(pages);

//Output: 450           */
//--------------------------------------------
/* Ex.07. Nested array.

let book=["Adv. JS",450,150,["TechGun",2021]];
let[name,page,price,[publication,year]]=book;
console.log(year);

//Output: 2021           */
//----------------------------------------------
/* Ex.08. parsing returned array from functions.

function book()
{
    return ["Adv. JS",450,150];
}
let[name,pages,price]=book();
console.log(name);
console.log(price);

//Output:
"Adv. JS"
150                     */
//----------------------------------------------
/* Ex.09. print 1st,3rd,5th colors name only.

let colors=["red","Black","Green","Yellow","Pink","Orange"];
let[c1, ,c3, ,c5]=colors;
console.log(c1);
console.log(c3);
console.log(c5);

//Output:
Red
Green
Pink                    */
//----------------------------------------------
/* Ex.10.

let no=[10,20,7,14,21,28];
let[n1,n2,...args]=no;          //rest operators
console.log(n1);
console.log(n2);
console.log(args);

//Output:
10
20
(4) [7, 14, 21, 28]         */
//-----------------------------------------------
/* Ex.11. Array Destructuring and Default values.

let x,y;
[x=10,y=20]=[100];
console.log(x);
console.log(y);

//Output:
100
20                             */
//------------------------------------------------
/* Ex.12. Swao two no's using Array Destructuring.

let x=100,y=200;
[x,y]=[y,x];
console.log(x);
console.log(y);

//Output:
200
100                             */
//------------------------------------------------