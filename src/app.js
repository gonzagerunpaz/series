const express = require('express')
const seriesRoute = require('./routes/series.route')

const PORT = process.env.PORT ?? 3000
const app =  express()

app.use(express.json())
app.use(seriesRoute)


app.listen(PORT, ()=>{
    console.log(`Servidor corriendo en el puerto ${PORT}`)
})


