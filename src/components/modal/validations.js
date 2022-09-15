import Joi from 'joi';

export const schema = Joi.object({
    cardNumber: Joi.string()
    .min(16)
    .max(16)
    .required()
    .pattern(new RegExp(/^[0-9]*$/))
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
    }),
    zipCode: Joi.string()
    .min(4)
    .max(6)
    .required()
    .messages({
        'string.min': 'Zip code must contain at least 4 digits',
        'string.max': `Zip code can't contain more than 6 digits`,
        'string.empty': 'This field is required'
    }),
    address: Joi.string()
    .required()
    .pattern(new RegExp(/\w /))
    .messages({
        'string.empty': 'This field is required',
        'string.pattern.base': 'Address must contain a street and a number'
    }),
    city: Joi.string()
    .required()
    .pattern(new RegExp(/^[a-zA-Z]+$/))
    .messages({
        'string.empty': 'This field is required',
        'string.pattern.base': 'City can only contain letters'
    })
})