const jwt = require("jsonwebtoken");
const userModel = require("../models/user.model");

const authMiddleware = async (req, res, next) => {
  try {
    const token = req.header("Authorization").replace("Bearer ", "");
    const data = jwt.verify(token, process.env.JWT_KEY);

    const user = await userModel.findOne({
      _id: data._id,
      "tokens.token": token,
    });
    if (!user) {
      throw new Error();
    }
    res.user = user;
    res.token = token;
    next();
  } catch (error) {
    return res
      .status(401)
      .json({ error: "Not authorized to access this resource" });
  }
};
module.exports = authMiddleware;
