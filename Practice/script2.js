// for(let i=0; i<=5; i++)
// {
//     let list = document.createElement('li');
//     console.log(list);
// }

// const listitems = document.createElement('div');
// document.body.appendChild('div');

// for(let i=0; i<5; i++)
// {
//     const div = document.createElement('div');
//     document.body.appendChild(div);
//     div.className="list items";
//     div.id="test";
//     div.textContent="Welcome to css";
//     div.style.background="blue";
//     div.style.color="red";
//     div.style.padding="20px";
//     div.style.margin="15px";
//     div.style.border="5px solid black";

//     console.log(div);
// };

// for(let i=0; i<5; i++)
// {
//     const div= document.createElement('div');
//     document.body.appendChild(div);
//     div.id="test";
//     if(div.id="test")
//     {
//         div.textContent="Hello world";
//     }

//     console.log(div);
// };

// function function1()
// {
//     var ul =document.getElementById("list");
//     var li=document.createElement("li");
//     li.appendChild(document.createTextNode("Element 4"));
//     ul.appendChild(li);
// }
// function1();

const arr = ["alpha", "bravo", "charlie", "delta", "echo"];
const cont = document.getElementById("container");

// create ul Element and set its attributes

const ul = document.createElement("ul");
// ul.setAttribute("style", "padding:0; margin:0");
ul.setAttribute("id", "thelist");
console.log(ul);
for (i = 0; i <= arr.length - 1; i++) {
  const li = document.createElement("li"); // create li element //
  li.innerHTML = arr[i]; // append li to ul //
//   li.setAttribute("style", "display:block;");

  ul.appendChild(li);
}
cont.appendChild(ul); //  add ul to the container  //



// function li(){
//     const ul =document.createElement('ul');
//     document.body.appendChild('ul');
//     // document.body.ul.appendChild('li');
// }

// const iteam = ['  Mango','apple','graps','banana'];
// for (let i=0; i<=3; i++)
// {
//     const li=document.createElement('li');
//     console.log(li);
//     // li.className="list";
//     li.textContent="iteam";
// }
