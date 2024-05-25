let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click", function() {
    let item = document.createElement("li");
    item.innerText = inp.value;
    
    let delbtn = document.createElement("button");
    delbtn.innerText = "delete";
    delbtn.classList.add("delete");
    
    ul.appendChild(item);
    item.appendChild(delbtn);
    
    
//     delbtn.addEventListener("dblclick", function() {
//         alert("element deleted");
       
//         item.remove();
//     });
    
//     inp.value = "";
 });

ul.addEventListener("click",function(event)
{
    if(event.target.nodeName == "BUTTON")
    {
        let listItem=event.target.parentElement;
        listItem.remove();
        console.log
    }
});


