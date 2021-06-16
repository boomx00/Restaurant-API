const app = require('express').Router();
const UserController = require('../controllers/UserController');

// Create a new local user
app.post("/register-local", UserController.createUser);

app.post("/login-local", UserController.userLogin);

app.post("/edit-user", UserController.editUser);

module.exports = app;