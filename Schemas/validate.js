const Joi = require("joi");

const { emailRegexp } = require("../constants/sendEmail");

const validateSchema = Joi.object({
  name: Joi.string(),
  phone: Joi.string(),
  email: Joi.string().pattern(emailRegexp).required(),
  message: Joi.string(),
});

module.exports = {
  validateSchema,
};
