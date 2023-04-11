// const p = document.createElement('p');
// document.body.append("This is Paragraph")
// // document.body.appendChild(p);
// p.textContent="This is Paragraph";
// console.log(p);

// let arr = ["apple","orange","mango"];
// console.log(typeof(arr));

// let res = arr.unshift("kiwi");
// console.log(res);
// console.log(arr);
// arr.pop();
// console.log(arr);
// arr.shift();
// console.log(arr);

// Looping :-
    // while, for, do...while, for in, for of, //

    // while :- For Entry controlled loop
    // do...while :- for Exit controlled loop

// let i=0;
// let arr = [1,2,3,4,5,6,7,8,9];
// while (i<arr.length) {
//     console.log(arr[i]);
//     i = i+1 ;
// }

// for(let i=0; i<arr.length; i++){
//     console.log(arr[i]);
// }

// let i=0;
// let arr = [1,2,3,4,5,];
// do{
//     console.log(arr[i]);
//     i=i+1;
// }
// while(i<arr.length);

// let i=10;
// while(i<10)
// {
//     console.log("Hello World");
// }
// do...while:- Exit controlled loop

// let i=10;
// do{
//     console.log(i);
// }
// while(i<10);

// let arr=[1,2,3,4,5,6,7,8,9];
// for(let i=0; i<arr.length; i++)
// {
//     if(i%2==0)
//     {
//         console.log(arr[i]);
//         console.log(i);
//     }
// }

// for (let i=0; i<5 ; i++)
// {
//     for(let j=0; j<5; j++)
//     {
//         console.log("*");
//     }
//     console.log("/n");
// }

// WebApis: Application Programing interface //
// RestApi: Representational State Transfer //
// function: Set of instruction 1)Predefined 2)Userdefined //

// Normal function
// function helloworld(name,dlg)
// {
//     console.log(`your name is ${name} main ${dlg}`);
// }
// helloworld("Pushpa","jhukega nai");

// callback function
// const prop = function(name,age)
// {
//     console.log(`welcome ${name} your age is ${age}`);
// }
// prop("Salman","50");

// arrow function
// const res = (name,age)=>console.log(`welcome ${name} your age is ${age}`);
// res("raj","26");