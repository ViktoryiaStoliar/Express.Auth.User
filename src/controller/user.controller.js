const express = require('express');
const { createUser, authUserEmail } = require('../service/user.service');
const { createToken } = require('../helper/jwt');
const { isValidData } = require('../helper/validation');
const { buildResponse } = require('../helper/build.Response');

const route = express.Router();

route.post('/reg', isValidData, async (req, res) => {
  try {
    const { name, surname, email, pwd } = req.body;
    const data = await createUser(name, surname, email, pwd);

    buildResponse(res, 200, data);
  } catch (error) {
    buildResponse(res, 401, error.message);
  }
});

route.post('/auth', async (req, res) => {
  try {
    const { email, pwd } = req.body;
    const data = await authUserEmail(email, pwd);

    const token = createToken(data);
    res.setHeader('authorization', [`Bearer ${token}`]);

    buildResponse(res, 200, data);
  } catch (error) {
    buildResponse(res, 401, error.message);
  }
});

module.exports = route;
