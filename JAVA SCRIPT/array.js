// javascript is homogeneous and heterogeneous type of data
let myArray=[
    1,
    "string",
    true,
    false,
    function a() {},
    {},
    null,
    undefined,
    100n,
];
console.log(myArray);


let b={};
let array = [];
console.log(array);
console.log(typeof array);

//how to check the array
console.log(Array.isArray(array));//true
console.log(Array.isArray(b));//false

console.log(array instanceof Array);//true
console.log(b instanceof Array);//false

//how to add an values to an array
array[0]=100;
array[48]=true;
array[100]="thursday"
console.log(array);

let boost=[100,200,300];

console.log((boost[3]=400));

//how to check the length of an array
console.log((boost[4]=500));
console.log(boost);
console.log(boost.length);

//how to fetch an array value
console.log(boost[2]);

//how to update an existing an array value
console.log((boost[3]="four hundred"));
console.log(boost);

//how to delete
console.log(delete boost[0]);
console.log(boost);

//Array methods

//1.push
let myPet=["gandhi","waste","fellow",true];
//             -3      -2       -1
console.log(myPet);

//push
//to add the value from behind an existing array
//push effects the original length of an array
// pushArray=myPet.push("definately");                        adding values from front
// console.log(pushArray);
// console.log(myPet);

//unshift
//unshift adding the values from the starting of an array
//unshift effects the original length of an array                         gets added at last
// let unshift=myPet.unshift(840);
// console.log(unshift);
// console.log(myPet);

//pop
//pop method removes an value from the end of an array
//pop does not accepts any arguments
//pop effects the original length of an array                         end value remove
// let popAry=myPet.pop()
// console.log(popAry);
// console.log(myPet);

//shift
//shift method will removes an value from the beginning of an array            front value remove
//shift does not accepts any arguments
//shift effects the original length of an array
// let shiftAry=myPet.shift();
// console.log(shiftAry);
// console.log(myPet);

//slice
//slice is used to extract an piece of value from an existing array
//it accepts one argument or two argument(includes 1st one ,excludes 2nd one)
//it does not effects original length of an array
//minus value in an argument indicates tht values from the end
// let sliceArray=myPet.slice(1,2);
// console.log(sliceArray);
// console.log(myPet);

// let sliceAry1=myPet.slice(-3,-1);
// console.log(sliceAry1);
// console.log(myPet);

//it creates an shallow copy from an array
// let shallowCopy=myPet.slice();
// console.log(shallowCopy);
// console.log(myPet);

//splice
//splice will accept one argument or two argument(includes first one,excludes second one)or three arguments(first one index,second how many values want to remove from that index,third elements to add from the removes element index)
//it effects original length of an array
// let spliceAry=myPet.splice(0,2,"hello","babye");
// console.log(spliceAry);
// console.log(myPet);

let array11=[30,60,90,120,150,180];
// let splice=array11.splice(0,3); //when it is 0 in the first argument it excludes last argument 
// let splice1=array11.splice(1,4);//when it is greater than 0 in the first argument it includes last argument
// console.log(splice1);
// console.log(splice);
// console.log(array11);

//if splice has three arguments-1st one indicates index,2nd one how many elements wants to be remove ,3rd from that removed element index how many elements wants to add
let splice3=array11.splice(1,3,2,4,6,8);
console.log(splice3);
console.log(array11);

//find
let array9=[10,20,9,51,800,556]

// find method in javascript returns the first array element which satisfies the condition

//find is an higher order function
let findA=array9.find(function (ele) {
    return ele > 50;
    });
    console.log(findA);

// findindex 
//findindex in an js will return the index of an array element which satisfies the condition
let findIndex=array9.findIndex(function(index)
{
    return index < 30;
});
console.log(findIndex);

//flat
// flat in js will return the nested array into an single array 

let nest=[100,[200,990,[540,125],70]];
let flat=nest.flat(2);
console.log(flat);

//concat
// concat in js wll add or merge more than two arrays
let str=["abc","abd"];
let concatA=array11.concat(array9,nest,str);
console.log(concatA);

//join
let result=["javascript","is","beautiful","language"]; //join converts array to string
let join=result.join(" ");
console.log(join);
console.log(typeof join);

//string reverse
let rev=[30,50,250];
let str1=["aa","cc"];
let res=str1.reverse();
console.log(res);

//sort
let ss=["cbc","bca","abc"];
let numbers=[22,40,540,100,110,20,230];

//return -1:dont swap;
//return 1:swap;
//return 0:current place
//ascending
let sort=numbers.sort(function (cur,next)
 {
    if (cur<next) {
        return 1;
    }
     else {
        return -1;
    }
});

// descending
let sort1=numbers.sort(function (cur,next) {
    if (cur<next) {
        return -1;
    } 
    else
     {
        return 1;
    }
});
 console.log(sort);
 console.log(sort1);

//ascending using arrow function                    +=swap
let sort2=numbers.sort((cur,next)=>cur-next);
console.log(sort2);


//descending using arrow function                    +=swap
let sort3=numbers.sort((cur,next)=>next-cur);
console.log(sort3);

//some
// some method in js will return true when some elements of an array will  satisfies the given condition
let number=[330,440,110,550];
let some=number.some(function(ele){
    return ele>500; 
});
console.log(some);

//every
// every array method in js will true when every element in an array will satisfies the condition
let every=number.every(function(ele){
    return ele>500; 
});
console.log(every);

//map,filter,reduce(interview point of queestions)
//data transformation methods

//map
// map methods is used to loop an given array to a new array with transformed Data
let birthYear=[1990,2000,2001,1998,1999,2002];
let map=birthYear.map(function (ele){
    return 2023-ele;
});
console.log(map);

for (let values in birthYear){
    console.log(values);
}

let age=[];
for (let values of birthYear){
    let ages=2023-values;
    age.push(ages);
}
console.log(age);

// filter
// filter methods in js filter the each array element with a given condition
let transaction=[2000,-100,-40000,1000];
let deposit=transaction.filter(function (ele){
    return ele>0;
});
console.log(deposit);

let withdrawal=transaction.filter(function(ele){
    return ele < 0;
});
console.log(withdrawal);

let w=transaction.filter(()=>{
        //code here 
})

//reduce
//reduce method in js reduce or boils the given array elements into an single value 
let numb=[33,20,50,66,74];
let reduce=numb.reduce(function(acc,ele){
    return acc+ele;
},0);
console.log(reduce);

console.log(2+5+5+"10"-5);
console.log(2/"2"+true+"3"-2-null);
console.log(null+null+true-2);

let h=Number("10");
console.log(h,typeof h);


let h1=Number("ten");
console.log(h1,typeof h1);

//destructuring an array

let newArray=[34,44,79,84,74];
let [a,p,c,d,e,f]=newArray;
console.log(a,p,c,d,e,f);

let details=["john","fransisc",34,"female"];
let[firstname, ,age1,gender="male"]=details;
console.log(firstname);
// console.log(lastname);
console.log(age1);
console.log(gender);

function topresult(){
    return["suresh","ramesh","nandini","narmada","kamlesh"];
}
let[result3,result1,result2]=topresult();
console.log(result1,result2,result3);

//spread operator(...)
// spread operator in js extract all the array elements and displayed individually

let spread=[300,400,500,600,700,750]

let fSpread=[spread[0],spread[1],spread[2],spread[3],spread[4],spread[5]];
// console.log(fSpread);
console.log(...spread);

let str2="hello";
console.log(...str2);

let numii=[1,2,3];
console.log(...numii);

function addition(p,q,r)
{
    return p+q+r
}
console.log(addition(...numii));

let aa=[20,40,60];
let bb=[10,30,50];
let cc=[...aa,...bb];
console.log(cc);

console.log(...aa,...bb);

//rest operator(...)
//rest in js 
// it collects remaining elements of an array 

let rest=[90,180,30,60,720];
console.log(...rest);

let[a1,b1,...other]=rest;
console.log(a1,b1,other);

let nextLevel=[2,3,4,[50,60],[80,90,[50,[80,85],105]]]


















