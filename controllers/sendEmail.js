const { ctrlWrapper } = require("../helpers");

const sendEmail = async (req, res, next) => {
  res.json({ ...req.body });
};

module.exports = {
  sendEmail: ctrlWrapper(sendEmail),
};
