const { HttpError } = require("../helpers");

const validateBody = (schema) => {
  const func = (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      return next(
        HttpError("400", "Email fails to match the required pattern")
      );
    }
    next();
  };
  return func;
};

module.exports = validateBody;
