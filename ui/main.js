// Counter code
var button =document.getElementById('counter');
var counter=
button.onclick = function(){
    
    //make a request to the counter endpoint
    counter= counter + 1;
    var span = document.getElementById('count');
    span.innerHTML = counter.toString();
};