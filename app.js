
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.set('views', './views')
app.set('view engine', 'pug');
app.use(bodyParser.json());  
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function(req,res){
	res.send('Inicio');
});

app.get('/formulario', function(req,res){
	res.render("formulario", {title: 'Formulario de prueba', header:'Ingrese datos.'});
});

app.post('/page', function(req,res){

	var usuario = req.body.user;
	res.render('page', {user:usuario, title:'Bienvenido'});
	//res.redirect('/page');

});



app.listen(8080);