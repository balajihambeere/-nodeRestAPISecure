var customer = require('../controllers/customerController');

var user = require('../controllers/userController');

const routes = (app) => {

    app.route('/customers').get(customer.getCustomers);

    app.route('/customer').post(user.isAuthenticated, customer.createCustomer);

    app.route('/customer/:customerId').get(customer.getCustomerById);

    app.route('/customer/:customerId').put(user.isAuthenticated, customer.updateCustomer);

    app.route('/customer/:customerId').delete(user.isAuthenticated, customer.deleteCustomer);

    app.route('/register').post(user.register);

    app.route('/login').post(user.login);
}
module.exports = routes;