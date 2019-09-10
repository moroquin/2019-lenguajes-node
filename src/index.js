//imports 
const path = require('path');
const express = require ('express');
const app = express();

//configuración 
app.set('view engine', 'ejs');
app.set('views',__dirname+'/views');
app.set('port', 3000);
app.set('views', path.join(__dirname,'views'));


app.use(express.static(path.join(__dirname,'public')));

//rutas
app.use(require ('./routes/index'));
//escucha
app.listen(app.get('port'), ()=>{
    
    console.log('escuchando en el puerto ',app.get('port') );
});

console.log(path.join(__dirname,'/views/saludo.html'));

