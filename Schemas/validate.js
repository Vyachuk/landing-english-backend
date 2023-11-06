const Joi = require("joi");

const { emailRegexp } = require("../constants/sendEmail");

const validateSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().pattern(emailRegexp).required(),
});

module.exports = {
  validateSchema,
};
