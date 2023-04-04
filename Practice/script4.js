// function hy(){

//     const div = document.createElement('div');
//     document.body.appendChild('div');
//     parent.id='parent';
//     parent.className="parentNode";
//     let Array=["1","2","3","4"]
//     for(let i=0; i<Array.length; i++)
//     {
//         const child=createElement('div');
//         child.id=Array[i];
//         child.textcontent=Array[i];
//         div.appendChild('child');

//     }

//     console.log(div);
// };

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

// item.removeChild(createitem('Services'));