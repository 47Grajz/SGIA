const { USE } = require("sequelize/lib/index-hints");
const db = require("../models");

const create = async (
    storageId,
    name,
    amount,
    category,
    brand
) => {
    try {
        const tool = await db.Tool.create({
            storageId,
            name,
            amount,
            category,
            brand
        });
        return tool;
    } catch (error) {
        throw error;
    }
};

const getAll = async () => {

    try {
        const tools = await db.Tool.findAll({
            include: [{
                model: db.Loan,
                required: false,
                as: "user",
                attributes: ["tool"],
            },
            ]
        });
        return tools;
    } catch (error) {
        console.error("Error fetching loans:", error);
        throw error;
    }
};

module.exports = { create, getAll, getByUser };