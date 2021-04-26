var express = require('express');
var path = require('path');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
 
app.get('/', function(req,res){
    res.render('home')
});

app.get('/cases', function(req,res){
    res.render('cases')
});

app.get('/narcissist-case', function(req,res){
    res.render('narcissist-case');
});

app.get('/narcissist-case-start', function(req,res){
    res.render('narcissist-case-start');
});

if(process.env.PORT){
    app.listen(process.env.PORT);
}
else{
    app.listen(3000);
}

