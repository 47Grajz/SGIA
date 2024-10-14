'use strict';

module.exports = (sequelize, DataTypes) => {
  const LoanTools = sequelize.define('Loan_Tools', {
    loanId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Loans',
        key: 'id'
      }
    },
    toolId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Tools',
        key: 'id'
      }
    }
  }, {
    timestamps: false
  });

  return LoanTools; 
};