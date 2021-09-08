/* Ex.01.

let sum = (a,b) => console.log(a+b);
sum(5,7);

//Output: 12        */
//----------------------------------------
/* Ex.02.

let sum=(a,b)=>a+b;
console.log(sum(5,5));

//Output: 10        */
//----------------------------------------
/* Ex.03.

let square=a=>a*a;
console.log(square(5));

//Output: 25        */
//----------------------------------------
/* Ex.04.

let random=()=>Math.random();
console.log(random());

//Output: 0.25,.75,0.43.......        */
//----------------------------------------
/* Ex.05.

document.addEventListener('click',()=>{
    console.log("clicked..")
});

//Output: 7 clicked        */
//----------------------------------------
/* Ex.06. Also we can write.

document.addEventListener('click',()=>console.log("clicked.."));

//Output: 11 clicked        */
//----------------------------------------
/* Ex.07.

let list=['M1','M2'];
list.forEach((item)=>console.log(item));

//Output:
M1
M2                          */
//----------------------------------------
/* Ex.08.

let sayHello=(name)=>console.log("Hello ",name);
sayHello("Jalindar");

setTimeout(()=> console.log("Loading....!!"),3000);

//Output:
Hello Jalindar
Loading....!!               */
//----------------------------------------