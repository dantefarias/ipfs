const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const logger = require("../logger");
const { passwordIsValid, emailIsValid } = require("../utils/validator");
const { JWT_KEY } = require("../config");
const { User } = require("../models/user");

const TOKEN_EXPIRATION_SECONDS = 86400;

const signUp = async ({ email, password }) => {
  if (!email || !emailIsValid(email)) {
    throw new Error("Invalid email");
  }
  if (!password || !passwordIsValid(password)) {
    throw new Error("Password must be between 8 and 25 characters");
  }

  const user = await User.findOne({ email });
  if (user) {
    throw new Error("Email already in use");
  }

  const newUser = new User({
    email,
    password: bcrypt.hashSync(password, 6),
  });
  await newUser.save();
  logger.info(`User ${email} created successfully`);
  return {
    id: newUser._id,
    email: newUser.email,
  };
};

const signIn = async ({ email, password }) => {
  if (!email || !emailIsValid(email)) {
    throw new Error("Invalid email");
  }
  if (!password) {
    throw new Error("Password must be entered");
  }

  const user = await User.findOne({ email });
  if (!user) {
    throw new Error("Invalid credentials");
  }

  const passwordsAreMatching = bcrypt.compareSync(password, user.password);
  if (!passwordsAreMatching) {
    throw new Error("Wrong password");
  }

  const token = jwt.sign({ id: user.id }, JWT_KEY, {
    expiresIn: TOKEN_EXPIRATION_SECONDS,
  });

  return {
    id: user._id,
    email: user.email,
    accessToken: token,
  };
};

module.exports = {
  signUp,
  signIn,
};
