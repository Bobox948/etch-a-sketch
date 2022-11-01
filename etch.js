


const container = document.getElementById('container1');

var userinput=16;
var colors = ["blue", "green", "red", "black", "purple", "yellow", "orange", "brown", "pink", "gray", ]



for (let i=0; i<userinput; i++){

    var div1 = document.createElement('div');
    div1.classList.add('break');
    container.appendChild(div1);

    
   
    for (let j=0; j<userinput; j++)
    {
        var div1 = document.createElement('div');
        div1.classList.add('content');
        container.appendChild(div1);
        
       
        
        
    }

    var divcolor = document.getElementsByClassName("content");

var divcolor2 = Array.from(divcolor)


for (let i=0;i < divcolor2.length;i++){

divcolor2[i].addEventListener('mouseover', function(){


var random = Math.floor((Math.random() * colors.length));
var random2 = colors[random]
    


    divcolor2[i].style.backgroundColor= random2;


    
})
}

    
   
}

let gridselect = document.getElementById('grid')

gridselect.addEventListener('click', selection)

function selection(){

let element = document.getElementsByClassName("content");


let element2= Array.from(element)


for (let i=0; i<element2.length; i++){

    element2[i].remove();
}



 let ask = prompt('Size of grid?')
 userinput = Number(ask)
if (userinput >100 || userinput=="" || userinput==null || isNaN(userinput)){ 
    alert("Maximum grid 100x100, and please enter a number only");
    userinput = 16;


for (let i=0; i<userinput; i++){

    var div1 = document.createElement('div');
    div1.classList.add('break');
    container.appendChild(div1);

    
   
    for (let j=0; j<userinput; j++)
    {
        var div1 = document.createElement('div');
        div1.classList.add('content');
        container.appendChild(div1);
        
        
        
        
    }
    
   
}
 
var divcolor = document.getElementsByClassName("content");

var divcolor2 = Array.from(divcolor)


for (let i=0;i < divcolor2.length;i++){

divcolor2[i].addEventListener('mouseover', function(){


    var random = Math.floor((Math.random() * colors.length));
    var random2 = colors[random]
        
    
    
        divcolor2[i].style.backgroundColor= random2;
    
})
} }
else{
 for (let i=0; i<userinput; i++){

    var div1 = document.createElement('div');
    div1.classList.add('break');
    container.appendChild(div1);

    
   
    for (let j=0; j<userinput; j++)
    {
        var div1 = document.createElement('div');
        div1.classList.add('content');
        container.appendChild(div1);
        
        
        
        
    }
    
   
}
 
var divcolor = document.getElementsByClassName("content");

var divcolor2 = Array.from(divcolor)


for (let i=0;i < divcolor2.length;i++){

divcolor2[i].addEventListener('mouseover', function(){

    var random = Math.floor((Math.random() * colors.length));
    var random2 = colors[random]
        
    
    
        divcolor2[i].style.backgroundColor= random2;
    
})
}
}
}





