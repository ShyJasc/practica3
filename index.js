var mongoose = require('mongoose');
var app = require('./app');
var port = process.env.PORT || 3977;

mongoose.connect('mongodb://127.0.0.1:27017/proyectoJorge', (err, res) => {
    if (err) {
        throw err;
    } else {
        console.log("Conexión exitosa");
        app.listen(port, function() {
            console.log("Servidor de APIREST escuchando en http://localhost:" + port);
        });
    }
})