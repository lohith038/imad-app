// Counter code
var button =document.getElementaById('counter');
var counter=0;
button.onclick = function(){
    
    //make a request to the counter endpoint
    
    //capture the response and storew it in a variable
    
    //render the variable in the correct span
    counter=counter+1;
    var span=document.getElementById('count');
    span.innerHTML=counter.toString();
}