// for (let i=0; i<=1; i++)
// {
//     let list=document.createElement('ul');
//     console.log(list);
// }

function li(){
    const ul =document.createElement('ul');
    document.body.appendChild('ul');
    // document.body.ul.appendChild('li');
}

const iteam = ['  Mango','apple','graps','banana'];
for (let i=0; i<=3; i++)
{
    const li=document.createElement('li');
    console.log(li);
    // li.className="list";
    li.textContent="iteam";
}