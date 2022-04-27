import express from 'express'; //importamos la dependencia
var app = new express(); //Declaramos una app de express

var port = process.env.PORT || 3000; //seteamos el puerto para que escuche el servidor //indica el puerto por donde se ejecutará el server

app.use('/assets', express.static('/public'));
app.set('view engine', 'ejs');

app.use('/', (req, res, next) => {
    console.log('Request Url:' + req.url);
    next();
});

//primera ruta(está al nivel de la raíz /), Hello World!
app.get('/', (req, res) => {
    res.render('index'); //imprime en html //Se cambia send por render porque un template se hará cargo de renderizar el contenido hacia index
});

//Tercera ruta
app.get('/person/:id', (req, res) => {
    res.render('person', { ID: req.params.id }); //Darle forma a la información en HTML. También recibiendo la información solicitada.//Solicitando el ID
});

app.get('/api', function (req, res){
    res.json({firstname: 'John', lastname: 'Doe'}); //Envía información al server de JSON
});


app.listen(port); //levantar el server y ponerlo a escuchar. //Asignarle al server a que puerto debe escuchar

//Para la práctica 13 
//ir a ejs 