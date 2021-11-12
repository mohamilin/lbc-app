const mongoose = require('mongoose');

const { ObjectId } = mongoose.Schema;

const transactionSchema = mongoose.Schema({
  userId: {
    type: ObjectId,
    ref: 'User',
  },
  classId: {
    type: ObjectId,
    ref: 'Classes',
  },
  status: {
    type: String,
    default: 'Pending',
  },
});

const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;
