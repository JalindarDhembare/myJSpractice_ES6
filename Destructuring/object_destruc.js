/* Ex.01. 

let book={
          name: "Adv. JS",
          pages: 500,
          price: 200   
         };
let{name,pages,price}=book;
console.log(name);
console.log(price);

//Output:
Adv. JS
200                 */
//----------------------------------
/* Ex.02. we can change a name.

let book={
    name: "Adv. JS",
    pages: 500,
    price: 200   
   };
let{name:title ,pages,price}=book;
console.log(title);
console.log(price);
//Output:
Adv. JS
200                 */
//----------------------------------
/* Ex.03.

let book={
    name: "Adv. JS",
    price: 200   
   };
let{name,price=500}=book;   //default value
console.log(price);

//Output: 200                 */
//----------------------------------
/* Ex.04.

let book={
    name: "Adv. JS"
   };
let{name,price=500}=book;   //default value
console.log(price);

//Output: 500                 */
//----------------------------------
/* Ex.05.

let book={
    name: "Adv. JS"
   };
let{name,price}=book;   //default value
console.log(price);

//Output: undefined                 */
//------------------------------------
/* Ex.06. Nested object Destructuring.

let book={
    name: "Adv. JS",
    price: 200,
    publications:{
                    pub_name:"TechGun",
                    year:2021
                 } 
   };
let{name,price,publications:{pub_name,year}}=book;
console.log(year);

//Output: 2021                     */
//------------------------------------
/* Ex.07.
 
let options={
            title:"menu",
            height: 100,
            width:200
            };
let{height,width,title}=options;    //order is changed.
console.log(title);                 //but not any affect.

//Output: menu                     */
//------------------------------------