import Joi from 'joi';

export const schema = Joi.object({
    cardNumber: Joi.string()
    .min(16)
    .max(16)
    .required()
    .pattern(/[0-9 ]+/)
    .messages({
        'string.min': 'Card Number must contain 16 digits',
        'string.max': 'Card Number must contain 16 digits',
        'string.empty': 'This field is required',
        'string.pattern.base': 'Card number format must be only numbers'
    }),
    expireDate: Joi.string()
    .min(5)
    .max(5)
    .required()
    .pattern(/^\d+(\/\d+)*$/)
    .messages({
        'string.min': 'Expire date must be MM/YY',
        'string.max': 'Expire date must be MM/YY',
        'string.empty': 'This field is required',
    }),
    code: Joi.string()
    .min(3)
    .max(3)
    .required()
    .messages({
        'string.min': 'Security code must be 3 digits',
        'string.max': 'Security code must be 3 digits',
        'string.empty': 'This field is required',
    })
})