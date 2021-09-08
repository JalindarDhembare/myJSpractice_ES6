/* Ex.01. In mixin, a class contain methods of other objects.

let person={
                sayHi()
                {
                    console.log("Hi");
                },
                sayBy()
                {
                    console.log("By");
                }
           };

class user
{
    constructor()
    {
        this.name="Jalu";
    }
}

Object.assign(user.prototype,person);       //mixin

let obj=new user();
console.log(obj);
obj.sayHi();
obj.sayBy()

//Output:
user {name: 'Jalu'}
Hi 
By                  */
//------------------------------------------------------
/* Ex.02. Adding multiple objects to class using mixin.

let person1={
    sayHi()
    {
        console.log("Hi");
    },
    sayBy()
    {
        console.log("By");
    }
};

let person2={
    sayHi()
    {
        console.log("Hi");
    },
    sayBy()
    {
        console.log("By");
    }
};

class user
{
constructor()
{
this.name="Jalu";
}
}

Object.assign(user.prototype,person1);       //mixin
Object.assign(user.prototype,person2);       //mixin

let obj=new user();
console.log(obj);
obj.sayHi();
obj.sayBy();

//Output:
user {name: 'Jalu'}
Hi 
By                  */
//------------------------------------------------------