// Task :-
//  div- 10 dynamically 
//  id- 10 - different
//  class -10 - different
//  according to id - content
//  according to classname - style

function x(){
for(let i=0; i<10; i++)
{
    const div=document.createElement('div');
    document.body.appendChild(div);
    const ids=['a','b','c','d','e','f','g','h','i','j'];
    const classN=['1','2','3','4','5','6','7','8','9','10'];

    for(let j=0; j<=i; j++)
    {
        div.id = ids[j];
        div.className= classN[j];

        if(div.id =='a' && div.className=='1')
    {
        div.textContent="This is JavaScript ";
        div.style.background="teal";
        div.style.fontSize="22px";
        div.style.textAlign="center";
        div.style.padding="15px";
        div.style.margin="16px";
    }
    else if(div.id=='b' && div.className=='2'){
        div.style.background="blue";
    }
    
    else if(div.id=='c' && div.className=='3'){
        div.style.background="brown";
    }

    else if(div.id=='d' && div.className=='4'){
        div.style.background="yellow";
    }

    else if(div.id=='e' && div.className=='5'){
        div.style.background="pink";
    }

    else if(div.id=='f' && div.className=='6'){
        div.style.background="orange";
    }

    else if(div.id=='g' && div.className=='7'){
        div.style.background="green";
    }

    else if(div.id=='h' && div.className=='8'){
        div.style.background="purple";
    }

    else if(div.id=='i' && div.className=='9'){
        div.style.background="gray";
    }

    else if(div.id=='j' && div.className=='10'){
        div.style.background="cyan";
    }
    }

    
    console.log(div);
}};
x();
