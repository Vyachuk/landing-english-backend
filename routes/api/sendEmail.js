const express = require("express");
const { HttpError } = require("../../helpers");
const { validateSchema } = require("../../Schemas/validate");

const router = express.Router();

router.post("/", async (req, res, next) => {
  try {
    const { error } = validateSchema.validate(req.body);
    if (error) {
      throw HttpError(400, error.message);
    }
    res.json({ ...req.body });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
