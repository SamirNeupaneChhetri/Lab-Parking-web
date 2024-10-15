const db = require('../config/db.js');



const CreateUser = async (email, password, name) =>{
    const result = await db.query('INSERT INTO users (email, password, name) VALUES($1 , $2, $3) RETURNING *', [email, password, name]);
    return result.rows[0];
}

const findUserByEmail = async (email) => {
    const result = await db.query('SELECT * FROM users WHERE email = $1', [email]);
    return result.rows[0];

}

const getAllUsers = async () => {
    const result = await db.query('SELECT email, name, password FROM users'); // Exclude passwords for security
    return result.rows;
};

module.exports = {
    CreateUser,
    findUserByEmail,
    getAllUsers
}