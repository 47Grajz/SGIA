const { USE } = require("sequelize/lib/index-hints");
const db = require("../models");

const create = async (
    loanDate,
    tool,
    loanRetrieve,       
    status,
    userId,
    sanctionId,
) => {
    try {
        const loan = await db.Loan.create({
            loanDate,
            tool,
            loanRetrieve,
            status,
            userId,
            sanctionId
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


  const getAllLoansWithTools = async () => {
    try {
      const loans = await db.Loan.findAll({
        include: [{
          model: db.Tool,
          as: 'tools',
          through: { attributes: [] },
          attributes: ['name', 'description']
        }]
      });
      return loans;
    } catch (error) {
      console.error("Error fetching loans with tools:", error);
      throw error;
    }
  };
  
module.exports = { create, getAll, getByUser, getAllLoansWithTools };