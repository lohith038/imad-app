// Counter code
var button =document.getElementById('counter');

button.onclick = function(){
    
    //make a request to the counter endpoint
    var request = new XMLHttpRequest();
    
    //capture the response and storew it in a variable
    request.onreadystatechange = function(){
        if(request.readystate === XMLHttpRequest.DONE){
            //take some action
            if(response.status === 200){
                var counter= request.responseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
            }
        }
        //not done yet
    };
    
    // make the request
    request.open('GET','http://lohith038.imad.hasura-app.io/counter',true);
    requesat.send(null);
};