// javascript : Brandan Eich -1991 : client side 

// Ryan dahl - Node is Envirionment / Validator - javascript - Server side 

// JavaScript - client, server - json - js object Notation :- API 

// Variables : to store the value in memory location ;

// var : Global scoped ;

// let : block-coped ;

// const : block-scoped ;


var x = 20; //scope global 
{
    var x = 30; global
    .console.log('value of x is ${x}'); //30
}
console.log('value of x is $ {x}'); //30//

let a = 30; //global
{
    let a = 40; //block-scoped
    console.log(a); //40
}
console.log(a);
const p = 33; //global
{
    const p = 44; //local
    console.log(p);
}
