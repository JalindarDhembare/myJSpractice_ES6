/* Ex.01. Here, we do variable as private.

class employee
{
    #name="";           //variable as private.
    constructor(name)
    {
        this.#name=name;
    }
    getName()
    {
        console.log(this.#name);
    }
}

let obj=new employee("Jalu");
obj.getName();

//Output: Jalu              */
//---------------------------------------------
/* Ex.02. Here, we do method as private.

class employee
{
    #name="";
    constructor(name)
    {
        this.#name=name;
    }
    #getName()          //method as private.
    {
        console.log(this.#name);
    }
    setName()
    {
        this.#getName();
    }
}

let obj=new employee("Jalindar");
obj.setName();

//Output: Jalindar             */
//---------------------------------------------