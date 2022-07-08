const PASSWORD_MIN = 8;
const PASSWORD_MAX = 25;

const passwordIsValid = (password) =>
  password.length >= PASSWORD_MIN && password.length <= PASSWORD_MAX;

const emailIsValid = (email) => {
  const validEmailRegex = /\S+@\S+\.\S+/;
  return validEmailRegex.test(email);
};

module.exports = {
  passwordIsValid,
  emailIsValid,
};
