const { classService, transactionService } = require('../../services');

const viewTransaction = async (req, res) => {
  try {
    const { id } = req.params;
    const { user } = req.session;
    const classes = await classService.viewClassById(id);
    const isSubscribe = await transactionService.isSubscribe({ id });
    if (!isSubscribe) {
      await transactionService.registerClass({ user, classes });
    }
    const { price } = classes;
    const dataPrice = new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(price);
    res.render('transaction', { user, classes, dataPrice });
  } catch (error) {
    console.log(error);
  }
};

const isSubscribe = async (req, res) => {
  // const
  const classSubscribe = await transactionService.isSubscribe();
};
module.exports = {
  viewTransaction,
  isSubscribe,
};
