/* Ex.01.

class employee
{
    constructor()
    {
        console.log("employee constructor");
    }
}
class manager extends employee
{
    constructor()
    {
        super();
        console.log("manager constructor");
    }
}
let obj=new manager();

//Output:
employee constructor
manager constructor             */
//-------------------------------------------------
/* Ex.02.

class employee
{
    constructor()
    {
        console.log("employee constructor");
    }
}
class manager extends employee
{
    
}
let obj=new manager();
console.log(obj);

//Output:
employee constructor
manager {}                         */
//-------------------------------------------------
/* Ex.03.

class employee
{
    constructor(name)
    {
        this.name=name;
    }
}
class manager extends employee
{
    constructor(name,dept)
    {
        super(name);
        this.dept=dept;
    }
}
let obj=new manager("Jalindar","web development");
console.log(obj);

//Output: manager {name: 'Jalindar', dept: 'web development'}   */
//-----------------------------------------------------------------
/* Ex.04.

class employee
{
    constructor(name)
    {
        this.name=name;
    }
    test()
    {
        console.log("employee test()");
    }
}
class manager extends employee
{
    constructor(name,dept)
    {
        super(name);
        this.dept=dept;
    }
}
let obj=new manager("Jalindar","web development");
console.log(obj);
obj.test();

//Output: 
manager {name: 'Jalindar', dept: 'web development'}  
employee test(                  */
//-----------------------------------------------------------------
/* Ex.05.

class employee
{
    constructor(name)
    {
        this.name=name;
    }
}
class manager extends employee
{
    constructor(name,dept)
    {
        super(name);
        this.dept=dept;
    }
    demo()
    {
        console.log(`${this.name} is employee of ${this.dept} department`);
    }
}
let obj=new manager("Jalindar","web development");
obj.demo();

//Output: Jalindar is employee of web development department        */
//----------------------------------------------------------------------
/* Ex.06.

class employee
{
    test()
    {
        console.log("Hi");
    }
}
class manager extends employee
{
    demo()
    {
        super.test();
        console.log("Hello");
    }
}
let obj=new manager();
obj.demo();

//Output:
Hi
Hello               */
//----------------------------------------------------------------------
/* Ex.07.

class employee
{
    test()
    {
        console.log("Hi");
    }
}
class manager extends employee
{
    test()
    {
        console.log("Hello");
    }
    demo()
    {
        this.test();
        console.log("Bye");
    }
}
let obj=new manager();
obj.demo();

//Output:
Hello
Bye                   */
//----------------------------------------------------------------------
/* Ex.08. Multilevel Inheritance.

class employee
{
    constructor(name)
    {
        this.name=name;
    }
}
class manager extends employee
{
    constructor(name,dept)
    {
        super(name);
        this.dept=dept;
    }
}
class teamlead extends manager
{

}
let obj=new teamlead("Jalindar","web development");
console.log(obj);

//Output: teamlead {name: 'Jalindar', dept: 'web development'}      */
//----------------------------------------------------------------------
/* Ex.09.

class Vehicle 
{
    constructor(name, type) 
    {
        this.name = name;
        this.type = type;
    }
    getName() 
        {
        return this.name;
        }
    getType() 
    {
        return this.type;
    }
}

class Car extends Vehicle 
{
    constructor(name) 
    {
        super(name, "cars");
    }
    getName()
    {
        return "Its a Car : " + super.getName();
    }
}

let car = new Car('Audi');
console.log(car.getName());
console.log(car.getType());

//Output:
Audi
cars                        */
//------------------------------------------------------