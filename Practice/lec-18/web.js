// import{add,nodiv,div}
// from'./script6.js'
// console.log(add(38,93));
// console.log(nodiv(38,93));
// console.log(div(38,93));

function SetHeader(name)
{
    const li= document.createElement("li");
    li.textContent=name;
    return li ;
}
// let menu=document.getElementById('Header');
let menu=document.querySelector("#Header");
menu.appendChild(SetHeader("Home"));
menu.appendChild(SetHeader("About"));
menu.appendChild(SetHeader("Services"));
menu.appendChild(SetHeader("Contact us"));
// console.log(menu);