const joi = require('joi');

const dataValidator = (data) => {
    const shema = Joi.object({
        fileName: Joi.string().required(),
        content:  Joi.string().required()
    })
    const result = shema.validate(data)
    return result
}

module.exports = dataValidator;