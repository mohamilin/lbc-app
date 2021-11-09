const { classService } = require('../../services');

const viewTransaction = async (req, res) => {
  try {
    const { id } = req.params;
    const { user } = req.session;
    const classes = await classService.viewClassById(id);
    const { price } = classes;
    const dataPrice = new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(price);
    res.render('transaction', { user, classes, dataPrice });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  viewTransaction,
};
