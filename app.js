
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.set('views', './views')
app.set('view engine', 'pug');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req,res){
	res.send('Inicio');
});

/*app.get('/:test', function(req, res){
	res.render('form', {title: 'Titulo', text: 'Funciona ', test:req.params.test});
});*/

app.get('/formulario', function(req,res){
	res.render('formulario', {title: 'Formulario de prueba', header:'Ingrese datos.'});
});

app.post('/formu', function(req,res){
	//console.log(req.params);
	app.render('page', {title:'pagina'});
	//res.send('puta madre');
});

app.get('/formu', function(req, res){
	app.render('page', {title:'pagina'});
});

app.listen(8080);