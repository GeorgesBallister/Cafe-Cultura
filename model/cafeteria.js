const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

let Cafeteria = new Schema ({
    nome: {
        type: String
    },
    local: {
        type: String
    },
    latitude: {
        type: Number
    },
    longitude: {
        type: Number
    },
    avaliacao:{
        type: Number
    },
    fotoPerfil:{
        type: String
    },
    fotoRecomend:{
        type: String
    },
    fotoCardapio:{
        type: String
    },
    horarioFunc:{
        type: String
    }

},{
    collection: 'Cafeteria'
});

module.exports = mongoose.model('Cafeteria', Cafeteria);