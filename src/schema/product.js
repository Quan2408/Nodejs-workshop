import Joi from "joi";

export const prdSchema = Joi.object({
  name: Joi.string().required().messages({
    "any.required": "name la truong bat buoc!",
    "string.empty": "name ko dc bo trong!",
  }),
  price: Joi.number().required().min(0).messages({
    "any.required": "price la truong bat buoc!",
    "number.empty": "price ko dc bo trong",
    "number.base": "price phai la so",
    "number.min": "price phai >0",
  }),
});
