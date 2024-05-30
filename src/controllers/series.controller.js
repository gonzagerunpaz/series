const series = require('../../data/series.json')

const getAllSeries = (req, res) => {
    res.status(200).json(series)
}

const getSerieById = (req, res) => {
    const id = req.params.id
    const serie = series.find( s=> s.id == id)
    res.status(200).json(serie)
}

const createSerie = (req, res) => {
    const serie = req.body
    let id = 1
    if(series.length) {
        const ids = series.map ( s => s.id )
        id = Math.max(...ids) + 1
    }
    series.push( {id, ...serie})
    res.status(201).json(series[series.length-1])
}


module.exports = { getAllSeries, getSerieById, createSerie, series  }
