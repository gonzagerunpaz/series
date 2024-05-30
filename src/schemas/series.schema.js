const Joi = require('joi')

const serieSchema = Joi.object().keys(
    {
        nombre: Joi.string().min(5).max(50).required().messages({
            "string.min": "nombre debe tener como minimo {#limit}",
            "string.max": "nombre debe tener como maximo {#limit}",
            "string.empty": "nombre no puede ser vacio",
            "any.required": "nombre es requerido"
        }),
        disponible: Joi.boolean().required().messages({
            "any.required": "disponible es requerido",
            "any.only": "Los valores posibles son true o false"
        }),
        plataforma: Joi.string().required().valid("netflix", "star plus", "flow").messages({
            "any.required": "plataforma es requerido",
            "any.only" : "Las plataformas solo puede ser netflix, star plus, flow"
        })
    }
)

module.exports = serieSchema