function demo()
{
    return "hello";
}
let d=demo();
console.log(d)

//the use of generator function
// to make efficient to iterate the values to make asynchronous


// the syntax of generator function
// function test()
// {
//     console.log("this is normal function");
// }
// test()

// generator function is an function which returns an generator Object that is stored in one variable

//the syntax of generator function
// function* generatorFun()
// {
//     console.log("this is generator function");
// }
// let generator=generatorFun()
// console.log(generator)

function* generatorFun()
{
    yield 32;
    yield "hello";
    yield "46"
    yield "gm"
    yield 59;
    yield 90;
    return "cricket"


}
let generator=generatorFun()
console.log(generator.next());
console.log(generator);
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator);

// generator function will produce a new Keyboard that is yield which holds the values of generator function.

// The yield values gets executed when the next function calls.

// The Number of yield is equal to the number of next function calls.

// generator function has 2 Property
//  1.value  2.done

//  The value property will hold the yield value.

//  The done property will tells that generator function status 
//    if the done is false the generator function is not yet Over
//    if the done is true it tells that the generator function execution is over

// The return keyword tells that generator function will get over after that if any statements are there all represents DONE value as true


// print the values of generator by using for of
for(let name of generator)
{
    console.log(name);
}












