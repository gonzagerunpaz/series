const Joi = require('joi')
const direccionSchema = require('../schemas/direccion.shema')
const alumnoSchema = Joi.object().keys(
    {
        nombre: Joi.string().min(5).max(50).required().messages({
            "string.min": "nombre debe tener como minimo {#limit}",
            "string.max": "nombre debe tener como maximo {#limit}",
            "string.empty": "nombre no puede ser vacio",
            "any.required": "nombre es requerido"
        }),
        direcciones: Joi.array().items(direccionSchema).required()
    }
)

module.exports = alumnoSchema