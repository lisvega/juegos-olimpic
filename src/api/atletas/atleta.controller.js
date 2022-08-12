const Atleta = require('./atleta.model');
const { setError } = require('../../helpers/utils');

const getAll = async (req, res, next) => {
    try {
        const atleta = await Atleta.find()
        return res.json({
            status: 200,
            message: 'Recovered all atletas',
            data: { atleta }
        });
    } catch (error) {
        return next(setError(500, 'Failed all codes'));
    }
}

const getById = async (req, res, next) => {
    try {
        const { id } = req.params
        const atleta = await Atleta.findById(id)
        if (!atleta) return next(setError(404, 'Atleta not found'))
        return res.json({
            status: 200,
            message: 'Recovered all atletas',
            data: { atleta: atleta }
        });
    } catch (error) {
        return next(setError(500, 'Failed atleta'))
    }
}

const create = async (req, res, next) => {
    try {
        const atleta = new Atleta(req.body)
        const atletatInBd = await atleta.save()
        return res.json({
            status: 201,
            message: 'Created new atleta',
            data: { atleta: atletatInBd }
        });
    } catch (error) {
        return next(setError(500, 'Failed created atleta'))
    }
}

const update = async (req, res, next) => {
    try {
        const { id } = req.params
        const atleta = new Atleta(req.body);
        atleta._id = id;
        const updatedAtleta = await Atleta.findByIdAndUpdate(id, atleta)
        if (!updatedAtleta) return next(setError(404, 'Code not found'))
        return res.json({
            status: 201,
            message: 'Updated atleta',
            data: { atleta: updatedAtleta }
        });
    } catch (error) {
        return next(setError(500, 'Failed updated atleta'));
    }
}

const deleteAtleta = async (req, res, next) => {
    try {
        const { id } = req.params
        const deletedAtleta = await Atleta.findByIdAndDelete(id)
        if (!deletedAtleta) return next(setError(404, 'Atleta not found'))
        return res.json({
            status: 200,
            message: 'deleted atleta',
            data: { atleta: deletedAtleta }
        });
    } catch (error) {
        return next(setError(500, 'Failed deleted atleta'));
    }
}

module.exports = {
    getAll,
    getById,
    create,
    update,
    deleteAtleta
}