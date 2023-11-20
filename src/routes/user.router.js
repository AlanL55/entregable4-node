const { getAll, create, getOne, remove, update, verifyCode, login } = require('../controllers/user.controller');
const express = require('express');

const userRouter = express.Router();

userRouter.route('/')
    .get(getAll)
    .post(create);

userRouter.route("/verify/:code")
    .get(verifyCode);

userRouter.route("/login")
    .post(login);

userRouter.route('/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

module.exports = userRouter;