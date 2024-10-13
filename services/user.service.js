const db = require("../models");
const bcrypt = require("bcrypt");

const create = async (
    name,
    lastName,
    email,
    password,
    status,
    phoneNumber,
) => {
    try {
        // Encriptar la contraseña
        const hashedPassword = await bcrypt.hash(password, 10);

        // Crear el usuario
        const user = await db.User.create({
            name,
            lastName,
            email,
            password: hashedPassword,
            status,
            phoneNumber,
        });

        return user;
    } catch (error) {
        throw error;
    }
};

const getAll = async () => {
    try {
        const users = await db.User.findAll({
            attributes: { exclude: ['password'] }
        });
        return users;
    } catch (error) {
        throw error;
    }
};

module.exports = { create, getAll };