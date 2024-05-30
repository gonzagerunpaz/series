const { series } = require('../controllers/series.controller')

const existeSerieById = (req, res, next) => {
    const id = req.params.id
    const idx = series.findIndex( s => s.id == id)
    if (idx < 0) {
        return res.status(404).json({
            error: `No se encuentra la serie con el id ${id}`
        })
    }
    next()
}

module.exports = { existeSerieById }