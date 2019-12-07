var mongoose = require('mongoose');

mongoose.connect("mongodb+srv://Alexander:562023027@tinkoffdb-sfgtm.mongodb.net/test?retryWrites=true&w=majority", { useUnifiedTopology: true });
var User = require('../../model/model');

/**
 * Метод принимающий 3 параметра
 * @param {string} firstName - имя 
 * @param {string} lastName - фамилия 
 * @param {number} email - электронная почта
 * @param {number} password - пароль
 */
function postExample(req, res, next) {
    var user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password
    })

    user.save(function (err) {
        if (err) throw err;
    })

    console.log(User);
}

module.exports = {
    postExample
}