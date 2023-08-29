// Create Element
// const button = document.createElement("button")
// Set sattribut to the element
// button.setAttribute("type","button")
// Content add
// button.innerText="Submit"
// Add event listner
// button.addEventListener("click",foo);
// Append to body
// document.body.append(button);
// Creating function
// function foo(){
//     alert("Happy Onam")
// }

// const button1 = document.createElement("button")
// button1.setAttribute("type","button")
// button1.innerText="Click Here to Wish"
// button1.addEventListener("click",foo);
// document.body.append(button1);
// function foo(){
//     alert("Happy Onam")
// }

// Get Element form HTML

// const btn = document.getElementById("btn")
// btn.addEventListener("mouseover",foo1);
// function foo1(){
//     document.body.style.backgroundColor="red"
// }
// btn.addEventListener("mouseout", foo2)
// function foo2(){
//     document.body.style.backgroundColor=""
// }

// Color a span/div element content when a user moves the mouse over the element.
// Using Get Element
// const div = document.getElementById("one")
// div.addEventListener("mouseover",fooover)
// function fooover(){
//     div.style.backgroundColor="red"
// }
// div.addEventListener("mouseout",fooout)
// function fooout(){
//     div.style.backgroundColor=""
// }

// Using create element

// const div = document.createElement("div")
// div.innerText="Click Here"
// document.body.append(div)
// div.addEventListener("mouseover",()=>div.style.backgroundColor="red")
// div.addEventListener("mouseout",()=>div.style.backgroundColor="")

// Prompt

// const button = document.createElement("button")
// button.innerText="Click Here"
// document.body.append(button)
// button.addEventListener("click",foo)

// function foo(){
//     var res = prompt("Enter the name")
    
//     console.log(res);
   
// }
// const span = document.querySelector("span")
// span.innerText = foo();
// document.body.append(span)

// Use prompt to read a value from user and display it in the span element.

// const element = document.querySelector("span")
// element.innerText = prompt("Enter a value");

// const element = prompt("Enter your name")
// const span = document.createElement("span")
// document.body.append(span)
// span.innerHTML=element

// Display the mouse X and Y coordinates in a <span> tag when you click on a <h1> tag which contains a paragraph.
// const element = document.querySelector("h1")

// element.addEventListener("click",(e)=>{
   
//     document.querySelector("span").innerText= `Coordinate X = ${e.pageX} and Y = ${e.pageY}`
// })
// Write a Javascript code for character counts in the textarea.
const textarea = document.getElementById("inputarea")
textarea.addEventListener("input",(event)=>{
    document.querySelector("span").innerText = `characters ${event.target.value.length}`
})