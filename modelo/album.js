'use strict'
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var EsquemaAlbum = Schema({
    titulo: String,
    descripcion: String,
    year: String,
    image: String,
    artist: { type: Schema.ObjectId, ref: "Artista" }
});

module.exports = mongoose.model('Album', EsquemaAlbum);