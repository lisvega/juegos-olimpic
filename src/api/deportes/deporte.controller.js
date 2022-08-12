const Deporte = require('./deporte.model');
const { setError } = require('../../helpers/utils');

const getAll = async (req, res, next) => {
    try {
        const deportes = await Deporte.find().populate("atletas");
        return res.json({
            status: 200,
            message: 'Recovered all deportes',
            data: { deportes: deportes }
        });
    } catch (error) {
        return next(setError(500, 'Failed all codes'));
    }
}

const getById = async (req, res, next) => {
    try {
        const { id } = req.params
        const deporte = await Deporte.findById(id);
        if (!deporte) return next(setError(404, 'Deporte not found'))
        return res.json({
            status: 200,
            message: 'Recovered all deportes',
            data: { deporte: deporte }
        });
    } catch (error) {
        return next(setError(500, 'Failed deporte'))
    }
}

const create = async (req, res, next) => {
    try {
        const deporte = new Deporte(req.body)
        const deporteInBd = await deporte.save()
        return res.json({
            status: 201,
            message: 'Created new deporte',
            data: { deporte: deporteInBd }
        });
    } catch (error) {
        return next(setError(500, 'Failed created deporte'))
    }
}

const update = async (req, res, next) => {
    try {
        const { id } = req.params
        const deporte = new Deporte(req.body);
        deporte._id = id;
        const updatedDeporte = await Deporte.findByIdAndUpdate(id, deporte)
        if (!updatedDeporte) return next(setError(404, 'Code not found'))
        return res.json({
            status: 201,
            message: 'Updated deporte',
            data: { deporte: updatedDeporte }
        });
    } catch (error) {
        return next(setError(500, 'Failed updated deporte'));
    }
}

const deleteDeporte = async (req, res, next) => {
    try {
        const { id } = req.params
        const deletedDeporte = await Deporte.findByIdAndDelete(id)
        if (!deletedDeporte) return next(setError(404, 'Deporte not found'))
        return res.json({
            status: 200,
            message: 'deleted deporte',
            data: { deporte: deletedDeporte }
        });
    } catch (error) {
        return next(setError(500, 'Failed deleted deporte'));
    }
}

module.exports = {
    getAll,
    getById,
    create,
    update,
    deleteDeporte
}