// var std={
//     name1:"raj"
// }
// console.log(std);

// var std1=new Object()
// std1.name1="raju1"
// console.log(std1);

// function Test(X)
// {
//     this.name1=X;
//     this.behaviour=function()
//     {
//         console.log("is a good");
//     }
// }
// var std2=new Test("KARTHIK")
// var std3=new Test("basava")
// console.log(std2);
// console.log(std3);


// class Demo{
//     constructor(x)
//     {
//   this.age="raju"
//     }
// test(params) {
//   console.log("i am a test class");  
// }
// }
// var d1=new Demo("45")

// console.log(d1);
// d1.test()
// console.log(d1.constructor.prototype);
// console.log(d1.__proto__);

// var str=new String("hi")
// console.log(str);
// console.log(str.constructor.prototype.concat.constructor.prototype.constructor
// );
// const target = { a: 1, b: 2 };

// const source = { b: 4, c: 5 };
// const returnedTarget = Object.assign(target, source);
// console.log(returnedTarget);
// console.log(target);
// console.log(source);

// console.log(returnedTarget === target);
// // Expected output: true


// var std={
//     name1:"raju",
//     name1:"rani"
// }
// console.log(std);

// window.alert("hi");
// var ans=window.parseInt("45");
// console.log(ans);
// window.print()

// console.log(window.screen.width);
// console.log(window.screen.height);

// console.log(window.screen.availWidth);
// console.log(window.screen.availHeight);
// console.log(window.screen.colorDepth);
// console.log(window.screen.orientation);

// console.log(window.history.forward());
// console.log(window.navigator);
// window.navigator.geolocation.getCurrentPosition((x)=>{
// console.log(x);
// })

// console.log(window.location);
// location.reload()
// setInterval(()=>{
//     // location.reload()
//     // location.replace("https://www.flipkart.com/")

// },2000)

console.log(window.document);
// document.write("hi")
// console.log(window.document.body);
// console.log(window.document.head);

// console.log(window.document.body);

// var h1=document.getElementById("myH1");
// console.log(h1);
// h1.style.background="green"

// var clsElements=document.getElementsByClassName("head")
// console.log(clsElements);
// console.log(clsElements[0]);
// // console.log(Array.isArray(clsElements));
// // clsElements.push(98)

// clsElements[0].style.background="red"
// clsElements[1].style.background="green"
// clsElements[2].style.background="yellow"
var list=document.getElementsByTagName("li");
console.log(list);
for(let c in list)
console.log(c);
// for(let i=0;i<list.length;i++)
// {
//     list[i].style.background="red"
// }
var pureArr=Array.from(list);
console.log(pureArr);
pureArr.push(4567)
console.log(pureArr);