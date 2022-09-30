import Joi from 'joi';

export const schema = Joi.object({
    cardNumber: Joi.string()
    .min(16)
    .max(16)
    .required()
    .pattern(new RegExp(/^(?:4[0-9]{12}(?:[0-9]{3})?)$/))
    .messages({
        'string.min': 'Card Number must contain 16 digits',
        'string.max': 'Card Number must contain 16 digits',
        'string.empty': 'This field is required',
        'string.pattern.base': 'Not a valid card number'
    }),
    expireDate: Joi.string()
    .min(5)
    .max(5)
    .required()
    .pattern(new RegExp(/(0?[0-9]|[1-5][0-9])\/([+-]?(?=\.\d|\d)(?:\d+)?(?:\.?\d*))(?:[eE]([+-]?\d+))?/i))
    .custom((value, helper) =>{
        const date = new Date().getFullYear();
        const dateLast = date.toString().substring(2,4);
        const year = value.substr(3,4)
        const month = value.substr(0, 2)
        console.log('date: ', date, 'date cortado: ', dateLast)
        if(month > 12){
            return helper.message({
                custom: `Month can't be grater than 12`,
            });
        }else if(month <= 0){
            return helper.message({
                custom: `Month can't be equal to 0`
            });
        }else if (year < dateLast){
            return helper.message({
                custom: 'Expire year must be equal or grater than current year',
            });
        }
    })
    .messages({
        'string.min': 'Expire date must be DD/MM',
        'string.max': 'Expire date must be DD/MM',
        'string.empty': 'This field is required',
        'string.pattern.base': 'Not a valid date format'
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