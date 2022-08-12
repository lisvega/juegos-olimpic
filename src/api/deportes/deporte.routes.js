const DeporteRoutes = require('express').Router();
const {
    getAll,
    getById,
    create,
    update,
    deleteDeporte } = require('./deporte.controller');

DeporteRoutes.get('/', getAll)
DeporteRoutes.get('/:id', getById)
DeporteRoutes.post('/', create)
DeporteRoutes.patch('/:id', update)
DeporteRoutes.delete('/:id', deleteDeporte)

module.exports = DeporteRoutes