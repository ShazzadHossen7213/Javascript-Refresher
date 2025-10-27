// var lang = "English";

// function learn(topic) { 
//     var lang = topic;

//     // ? js let block */
//     // if(true){
//     //     let a = 5;
//     //     a = 7; 
//     //     console.log(a);
//     //}
//     if(true){
//         const a = {
//             b: 5,
//         };
//         a.b = 8;
//         console.log(a);
//     }

//     console.log(`I am learning ${topic}`);
// };

// learn("JavaScript");

// console.log(`I Know ${lang}`);
// js scope 

// js function  
// function hello () {
//    console.log("Hello World");
// };
// let msg = hello();
// // console.log(msg);

// // js name expecition function 

// const learning = function learning () {
//     console.log("I am learning Javascript");
// };

// arrow Function 

// const hello = () =>({
//     a:4,
//     b:6,
// });
// console.log(hello());

// annoymous function 

// function hello() {
//     return () => {
//         console.log("Hello World");
//     };
// }

// hello()();
// select button
// const button = document.getElementById("button");
// event handler
// function hello(){
//     console.log("Hello World");
// }
//  button.addEventListener("click", hello);

//  let x = 5;
//  let y = 6;

//  x = y;
//  y = 7;
//  console.log(x);
//  console.log(y);
 
//  let a = ["js", "python"];
//  let b = ["Html", "css"];

//  b = a;

//  console.log(a);
//  console.log(b);
//  a.push("Go");
//  console.log(a);

// Array methods

const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];

// const result = fruits.findIndex((f) => f === "Orange" || f === "Mango" ); // find Method
// const result = fruits.filter((f) => f === "Orange" || f === "Mango" );

const result = fruits.slice(2, 4);
console.log(result); 
console.log(fruits); 