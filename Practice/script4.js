function createitem(name)
{
    let li=document.createElement('li');
    li.textContent=name;
    return li;
}
const item=document.querySelector('#items');

item.appendChild(createitem('Home'));
item.appendChild(createitem('Services'));
item.appendChild(createitem('About us'));
item.appendChild(createitem('Contact us'));

let x = document.getElementById("items");
console.log(x);
x.removeChild(x.childNodes[2]);
