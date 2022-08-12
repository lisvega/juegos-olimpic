const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    name: { type: String, unique: true, required: true },
    images: { type: String, required: true },
    pais: { type: String, required: true },
    age: { type: String, required: true },
    sports: { type: String, required: true }
},
    {
        timestamps: true
    }
);

module.exports = mongoose.model('atletas', schema);