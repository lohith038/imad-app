// Counter code
var button =document.getElementById('counter');
var counter=0;

button.onclick = function(){
    
    //make a request to the counter endpoint
    var request = new XMLHttpRequest();
    
    //capture the response and storew it in a variable
    request.onreadystatechange = function(){
        if(request.readtstate === XMLHttpRequest.DONE){
            //take some action
            if(response.status === 200){
                var counter= request.responseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
            }
        }
        //not done yet
    };
};