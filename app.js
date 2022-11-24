'use strict'

var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var user_routes = require('./controlador/usuarioRuta');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//Configurar las cabeceras http
//rutas base
app.use('/api', user_routes);
//Respuesta del servidor web
//app.get('/pruebas', function(req, res) {
//  res.status(200).send({ mesage: 'Prueba para la practica 3 Alumno Jorge Armando Salinas Cuevas' });
//});

module.exports = app;