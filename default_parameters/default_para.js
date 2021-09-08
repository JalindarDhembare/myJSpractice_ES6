/* Ex.01. 

function test(msg)
{
    console.log(msg);
}
test();

//Output: undefined     */
// User not passed argument..!!
//---------------------------------------------------------
/* Ex.02.

function test(msg="Hi")       //default paramerter.
{
    console.log(msg);
}
test();

//Output: Hi       */
//we passed default parameter.
//---------------------------------------------------------
/* Ex.03.

function test(msg="Hi")
{
    console.log(msg);
}
test("Hello");

//Output: Hello     */
// compiler takes argement as input
//---------------------------------------------------------
/* Ex.04.

function test(a=5,b=7)
{
    console.log("Addition is ",a+b);    //6+7=13
}
test(6);

//Output: Addition is  13       */
//---------------------------------------------------------
/* Ex.05.

function test(a=5,b=7)
{
    console.log("Addition is ",a+b);    //6+2=8
}
test(6,2,3);

//Output: Addition is  8       */
//---------------------------------------------------------