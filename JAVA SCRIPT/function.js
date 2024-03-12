//1.Anonymous Function
//a function which does not have function name
// we cant execute anonymous function because it does not have function name
//to execute anonymous function1.named function 2.function with expression 3.IIFE

//syntax of anonymous
// function {

// }
//()

//2.named function
// a function which has a function name is called as named function

function demo()
{
    console.log("hello this is named function");
}
demo();
demo();

//passing an argument for the function
function test(name) {
    alert(name + " ganesh chaturthy");
}
test("happy");


//function with expression
let a=function()
{
    console.log("this is function with expression function");
};
a();
// console.log(a());//undefined bcz of log statement


// first class function
// when we are using function with expression , we are passing function as an value for the expression that value we call it as first class function.

// arrow function
// to reduce the syntax we go for arrow function 

// ()=>(we call it as fat arrow)

let c=(a,d)=> {
    console.log(a + d);
};
c(10,20);

//first rule

let ArrFun=()=>console.log("hello");
ArrFun();

//second rule

let ArrFun1=()=>{
    let festivalG="gannu";
    console.log(festivalG);
};
ArrFun1();

//third rule
let ArrFun2=()=>{
    let day="monday";
    return day;
};
alert(ArrFun2());
console.log(ArrFun2());

//fourth rule

let ArrFun3=()=>{
    let comngDay="wednesday";
    console.log(comngDay);
};
// console.log(ArrFun3);undefined bcz of two log statements
ArrFun3();




