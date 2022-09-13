import Joi from 'joi';

export const schema = Joi.object({
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