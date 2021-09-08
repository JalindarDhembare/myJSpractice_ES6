/* Ex.01.

class person
{

}
let obj1=new person();
console.log(obj1);

//Output: person {}             */
//----------------------------------------
/* Ex.02.

class person
{
    constructor()
    {
        console.log("constructor crated..!!");
    }
}
let obj1=new person();

//Output: constructor crated..!!        */
//----------------------------------------
/* Ex.03.

class person
{
    constructor()
    {
        console.log("constructor crated..!!");
    }
}
let obj1=new person();
let obj2=new person();

//Output: 
constructor crated..!!
constructor crated..!!        */
//----------------------------------------
/* Ex.04.

class person
{
    constructor(name,age)
    {
        this.name=name;
        this.age=age;
    }
}
let obj1=new person("Jalindar",23);
console.log(obj1);

//Output: person {name: 'Jalindar', age: 23} */
//----------------------------------------------
/* Ex.05.

class person
{
    constructor(name,age)
    {
        this.name=name;
        this.age=age;
    }
    test()
    {
        console.log("called test()");
    }
}
let obj1=new person("Jalindar",23);
obj1.test();
console.log(obj1);

//Output:
called test()
person {name: 'Jalindar', age: 23}      */
//----------------------------------------------
/* Ex.06.

class person
{
    constructor(name,age)
    {
        this.name=name;
        this.age=age;
    }
    test()
    {
        console.log("called test()");
    }
    static demo()
    {
        console.log("static demo() called");
    }
}
let obj1=new person("Jalindar",23);
console.log(obj1);
obj1.test();
person.demo();

//Output:
person {name: 'Jalindar', age: 23}
called test()
static demo() called            */
//----------------------------------------------
/* Ex.07.

class person
{
    static a=10;
    static demo()
    {
        console.log("static demo() called");
    }
}
console.log(person.a);
person.demo();

//Output:
10
static demo() called               */
//----------------------------------------------
/* Ex.08.

class person
{
    constructor(fname,lname,age)
    {
        this.fname=fname;
        this.lname=lname;
        this.age=age;
    }
    getFullname()
    {
        return this.fname+" "+this.lname;
    }
}
const obj=new person("Jalindar","Dhembare",23);
console.log("First Name: ",obj.fname);
console.log("Last Name: ",obj.lname);
console.log("Age: ",obj.age);

const fullname=obj.getFullname();
console.log("Full Name: ",fullname);

//Output:
First Name:  Jalindar
Last Name:  Dhembare
Age:  23
Full Name:  Jalindar Dhembare       */
//----------------------------------------------