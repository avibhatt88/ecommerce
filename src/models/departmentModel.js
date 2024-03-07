const db = require('../config/dbConfig');

const createDepartment = (name, status, callback) => {
    const query = 'INSERT INTO departments (name, status) VALUES (?, ?)';
    db.query(query, [name, status], (err, result) => {
        if (err) throw err;
        callback(result);
    });
};

const getDepartments = () => {
    const query = 'SELECT * FROM departments';
    return new Promise((resolve, reject) => {
        db.query(query, (err, result) => {
            if (err) reject(err);
            resolve(result);
        });
    });
};


module.exports = {
    createDepartment,
    getDepartments,
};
