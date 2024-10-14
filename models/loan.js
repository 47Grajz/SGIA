'use strict';

const {

  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {

  class Loan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

    static associate(models) {

      Loan.belongsTo(models.User, {

        foreignKey: 'userId',
        as: 'user'

      });

      Loan.belongsToMany(models.Tool, {
        through: 'LoanTools',
        as: 'tools',
        foreignKey: 'loanId'
      });
    }
  }

  Loan.init({
    loanDate    : DataTypes.DATE,
    loanRetrieve: DataTypes.DATE,
    status      : DataTypes.STRING,
    sanctionId  : DataTypes.STRING,
    userId: {

      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model : 'Users',
        key   : 'id'
      }
    }
  }, 
  {
    sequelize,
    modelName: 'Loan',
  });

  return Loan;
};