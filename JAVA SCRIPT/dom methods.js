//dom methods
//1.get elementbyID
// it return an object which element having an id as well as value as an document object
//it used to target single html element


let elementID=document.getElementById("demo");
console.log(elementID,typeof elementID);

// innerHTML(property of dom)
//which displays the text by taking the behaviour of specific tag
// elementID.innerHTML="<h1>i want to change</h1>";

//innertext(property of dom)
//it displays text but does not take behaviour of tag
// elementID.innerText="<h1>i too want to change</h1>";
elementID.innerText="web technology";

//styling the html element
elementID.style.color="red";
elementID.style.fontSize="50px";

let elementbyID1=document.getElementById("test");
console.log(elementbyID1,typeof elementbyID1);




