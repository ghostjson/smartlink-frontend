import Joi from 'joi';

export const RewardFormSchema = Joi.object({
  name: Joi.string().required(),
  type: Joi.string().allow('voucher', 'promo', 'coupon').required(),
  coupon: Joi.object({
    discount: Joi.string().default('0').empty(''),
  }).when('type', {
    is: 'coupon',
    then: Joi.required(),
    otherwise: Joi.optional(),
  }),

  voucher: Joi.object({
    price: Joi.string().default('0').empty(''),
    currency: Joi.string().default('USD').empty(''),
  }).when('type', {
    is: 'voucher',
    then: Joi.required(),
    otherwise: Joi.optional(),
  }),
  content: Joi.any().optional(),
  promo: Joi.object({
    buy: Joi.string().empty('').required(),
    get: Joi.string().empty('').required(),
  }).when('type', {
    is: 'promo',
    then: Joi.required(),
    otherwise: Joi.optional(),
  }),
  date: Joi.date().required(),
  style: Joi.any(),
  count: Joi.number().required(),
});
