


const container = document.getElementById('container1');

var userinput=16;



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

divcolor2[i].addEventListener("mouseover", function(){

    divcolor2[i].style.backgroundColor= "red";

    
})
}

