import Joi from "joi";

export const registerSchema = Joi.object({
  username: Joi.string().required().trim().messages({
    "any.required": "username la truong bat buoc!",
    "string.empty": "username ko dc bo trong!",
    "string.trim": "username ko dc chua khoang trang!",
  }),
  email: Joi.string().required().email().trim().messages({
    "any.required": "email la truong bat buoc!",
    "string.empty": "email ko dc bo trong!",
    "string.trim": "email ko dc chua khoang trang!",
    "string.email": "email phai dung dinh dang!",
  }),
  password: Joi.string().required().trim().min(6).messages({
    "any.required": "password la truong bat buoc!",
    "string.empty": "password ko dc bo trong!",
    "string.trim": "password ko dc chua khoang trang!",
    "string.min": "password chua it nhat 6 ki tu!",
  }),
  confirmPassword: Joi.string()
    .required()
    .trim()
    .valid(Joi.ref("password"))
    .messages({
      "any.required": "confirmPassword la truong bat buoc!",
      "string.empty": "confirmPassword ko dc bo trong!",
      "string.trim": "confirmPassword ko dc chua khoang trang!",
      "string.min": "confirmPassword chua it nhat 6 ki tu!",
      "any.only": "confirmPassword phai trung voi password!",
    }),
});

export const loginSchema = Joi.object({
  email: Joi.string().required().email().trim().messages({
    "any.required": "email la truong bat buoc!",
    "string.empty": "email ko dc bo trong!",
    "string.trim": "email ko dc chua khoang trang!",
    "string.email": "email phai dung dinh dang!",
  }),
  password: Joi.string().required().trim().min(6).messages({
    "any.required": "password la truong bat buoc!",
    "string.empty": "password ko dc bo trong!",
    "string.trim": "password ko dc chua khoang trang!",
    "string.min": "password chua it nhat 6 ki tu!",
  }),
});
