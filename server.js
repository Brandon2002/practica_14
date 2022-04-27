const express= require('express') //Inyección de la dependencia
let app = express();
let PORT = process.env.PORT || 3000; //Puerto donde el servidor va a "escuchar" la petición
app.use('/assets', express.static(__dirname + '/public')); //contenido estático

app.set('view engine', 'ejs');

app.get('/', (req, res) =>{
    res.send(`<!DOCTYPE html> <html lang="en"> <head><link rel="stylesheet" href="/assets/style.css">
    <title> Document</title> </head>
    <body> <h1>Hola mundo<h1>
    <p> Este es un párrafo y su contenido debe ser azul</p></body> </html>`)
});

app.get('/person/:id', (req, res) => {
    res.render('person', {ID: req.params.id, Qstr: req.query.qrst});
});

app.get('/message/:id', (req, res) => {
    res.render('message', {ID: req.params.id, message: req.query.message, times: req.query.times});
});

app.listen(PORT);