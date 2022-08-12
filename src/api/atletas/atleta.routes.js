const AtletaRoutes = require('express').Router();
const {
    getAll,
    getById,
    create,
    update,
    deleteAtleta } = require('./atleta.controller');

AtletaRoutes.get('/', getAll)
AtletaRoutes.get('/:id', getById)
AtletaRoutes.post('/', create)
AtletaRoutes.patch('/:id', update)
AtletaRoutes.delete('/:id', deleteAtleta)

module.exports = AtletaRoutes