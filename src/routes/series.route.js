const { Router } = require('express')
const seriesController = require('../controllers/series.controller')
const seriesMiddleware = require('../middlewares/series.middleware')
const schemaValidator = require('../middlewares/schemaValidator')
const seriesSchema = require('../schemas/series.schema')
const alumnoSchema = require('../schemas/alumnos.schema')
const route = Router()

route.get('/series', seriesController.getAllSeries)
route.get('/series/:id', seriesMiddleware.existeSerieById, seriesController.getSerieById )
route.post('/series', schemaValidator(seriesSchema), seriesController.createSerie )
route.post('/alumno', schemaValidator(alumnoSchema), (req, res)=>{ res.status(201).json({message:"exito"})})

module.exports = route  