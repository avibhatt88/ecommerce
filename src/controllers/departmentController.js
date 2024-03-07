// controllers/departmentController.js
const departmentModel = require('../models/departmentModel');

const createDepartment = (req, res) => {
    const { name, status } = req.body;

    departmentModel.createDepartment(name, status, (result) => {
        res.json({ message: 'Department created successfully', result });
    });
};

const getDepartmentList = async (req, res) => {
    try {
        const departments = await departmentModel.getDepartments();
        res.json(departments);
    } catch (error) {
        console.error('Error fetching department list:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};



module.exports = {
    createDepartment,
    getDepartmentList,
};
