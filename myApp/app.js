var express = require('express');
var path = require('path');
var helmet = require('helmet');
var slash = require('express-slash');
var app = express();


app.enable('strict routing');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/favicon.ico', express.static('public/images/LOGO2.png'));
//app.use(helmet())

var router = express.Router({
    caseSensitive: app.get('case sensitive routing'),
    strict       : app.get('strict routing')
});
 
app.use(router);
app.use(slash());
 
router.get('/', function(req,res){
    res.render('home')
});

router.get('/cases', function(req,res){
    res.render('cases')
});

router.get('/cases/narcissist', function(req,res){
    res.render('narcissist')
    //res.redirect('narcissist')
});

router.get('/cases/narcissist/start', function(req,res){
    res.render('start');
});

if(process.env.PORT){
    app.listen(process.env.PORT);
}
else{
    app.listen(3000);
}

