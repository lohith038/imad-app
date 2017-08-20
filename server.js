app.get('/',function (req, res){
   res.sendFile(path.join(__dirname,'ui','index.html')); 
});

app.get('/:articleName',function (req, res){
    var articleName=req.params.articleName;
   res.send(createTemplate(articles[articleName])); 
});

app.get('/ui/style.css',function (req, res){
   res.sendFile(path.join(__dirname,'ui','style.css')); 
});

app.get('/ui/main.js',function (req, res){
   res.sendFile(path.join(__dirname,'ui','main.js')); 
});

app.get('/ui/madi.png',function (req, res){
   res.sendFile(path.join(__dirname,'ui','madi.png')); 
});

var port=80;
app.listen(port, function(){
    console.log('IMAD course app listening on port  ${port}!');
});