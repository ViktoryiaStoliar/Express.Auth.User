function isValidData(req, res, next) {
  const { name, surname, email, pwd } = req.body;

  if (!name) throw new Error('name is not found');
  if (!surname) throw new Error('surname is not found');
  if (!email) throw new Error('email is not found');
  if (!pwd) throw new Error('pwd is not found');

  if (!isNaN(name)) throw new Error('should be not a number');
  if (!isNaN(name)) throw new Error('should be not a number');
  if (!/^[\w\.\-]+@[a-z]{4,}\.[a-z]{2,}$/gm.test(email)) throw new Error('incorrect email');
  if (pwd.length < 8) throw new Error('the length should been more then 8 symbols');

  next();
}

module.exports = { isValidData };
