const { USE } = require("sequelize/lib/index-hints");
const db = require("../models");

const create = async (
    loanDate,
    loanRetrieve,       
    status,
    userId,
) => {
    try {
        const loan = await db.Loan.create({
            loanDate,
            loanRetrieve,
            status,
            userId
        });
        return loan;
    } catch (error) {
        throw error;
    }
};

const getByUser = async (userId) => {
    try {
      const loansByUser = await db.Loan.findAll({
        where: { userId: userId },
      });
      return loansByUser;
    } catch (error) {
      throw error;
    }
  };


const getAll = async () => {
  
    try {
      const loans = await db.Loan.findAll({
        include: [{
          model: db.User,
          required: false,
          as: "user",
          attributes: ["name","lastName","email"],
        },
        ]
      });
      return loans;
    } catch (error) {
    console.error("Error fetching loans:", error);
      throw error;
    }
  };

module.exports = { create, getAll, getByUser };