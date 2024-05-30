const Joi = require('joi')

const direccionSchema = Joi.object().keys({
    calle: Joi.string().min(1).max(50).required().messages({
        "string.min": "calle debe tener como minimo {#limit}",
        "string.max": "calle debe tener como maximo {#limit}",
        "string.empty": "calle no puede ser vacio",
        "any.required": "calle es requerido"
    }),
    numero: Joi.number().min(0).messages({
        "number.min": "numero debe ser como minimo {#limit}",
    })
})

module.exports = direccionSchema