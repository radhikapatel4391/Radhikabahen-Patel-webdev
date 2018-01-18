var app = require('../../express');
var userModel = require('../models/user/user.model.server');
app.post('/api/assignment/user', createUser);
app.get('/api/assignment/user', findAllUsers);
//app.get('/api/assignment/user?username=username', findUserByUsername); // covered by findAllUsers
//app.get('/api/assignment/user?username=username&password=password', findUserByCredentials); // covered by findAllUsers
app.get('/api/assignment/user/:userId', findUserById);
app.put('/api/assignment/user/:userId', updateUser);
app.delete('/api/assignment/user/:userId', deleteUser);

function createUser(req, res) {
    var user = req.body;
    //user.password = bcrypt.hashSync(user.password);
    userModel
        .createUser(user)
        .then(function (user) {
            res.json(user);
        }, function (err) {
            res.send(err);
        });
}
function findAllUsers(req, res) {
    var username = req.query['username'];
    var password = req.query['password'];
    if(username && password) {
        userModel
            .findUserByCredentials(username, password)
            .then(function (user) {
                if(user) {
                    res.json(user);
                } else {
                    res.sendStatus(404);
                }
            });
    } else if(username) {
        userModel
            .findUserByUsername(username)
            .then(function (user) {
                if(user) {
                    res.json(user);
                } else {
                    res.sendStatus(404);
                }
            });
    } else {
        userModel
            .findAllUsers()
            .then(function (users) {
                res.json(users);
            });
    }
}

function findUserById(req, res) {
    var userId = req.params['userId'];
    userModel
        .findUserById(userId)
        .then(function (user) {
            res.json(user);
        });
}

function updateUser(req, res) {
    var user = req.body;
    userModel
        .updateUser(req.params.userId, user)
        .then(function (status) {
            res.send(status);
        });
}


function deleteUser(req, res) {
    var userId = req.params.userId;
    userModel
        .deleteUser(userId)
        .then(function (status) {
            res.send(status);
        });
}