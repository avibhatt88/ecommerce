// controllers/userController.js
const userModel = require('../models/userModel');

const getAllUsers = (req, res) => {
    userModel.getAllUsers((users) => {
        res.json(users);
    });
};

module.exports = {
    getAllUsers,
};
