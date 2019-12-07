
/**
 * Метод принимающий 3 парамметра
 * @param {string} id - айди пользователя
 * @param {string} name - имя
 * @param {number} age - возраст
 */
function postExample(req, res, next) {
    const user = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        userName: req.body.userName,
        password: req.body.password
    }

    if (!user.firstName || !user.lastName || !user.userName || !user.password) {
        res.send({Error: 'NO PARAMS'})
    }
    console.log(user.firstName, user.lastName, user.userName, user.password);
    res.json({Success: true})
}

module.exports =  {
    postExample
}