const {User}  = require('../models')
const crypt = require('../helpers/cyrpt')
const jwt = require('../helpers/jwt')
const Sequelize = require('sequelize');

class Controller {

    static userRegister(req, res) {
        let newUser = req.body
        User.findOrCreate({
            where: Sequelize.or(
                { username: newUser.username },
                { email: newUser.email }
              )
              ,
            defaults: {
                username: newUser.username.toLowerCase(),
                email: newUser.email.toLowerCase(),
                password: newUser.password,
                phonenumber: newUser.phonenumber,
                kolakCount : 0,
                rujakCount:0,
                cendolCount:0,
            }
        })
            .then(response => {
                if (response[1]) {
                    res.status(201).json({ "Status": "Created", "Message": "New User Registered" })
                } else {
                    throw {status: "Failed", message: 'Username or Email has been taken'}
                    // res.status(400).json({"Status":"Failed","message":"Username or Email has been taken"})
                }
            })
            .then((user, created) => {
                res.json(created);
            })

            .catch(err => {
                res.status(400).json(err);

        })
    }

    static userLogin(req, res) {
        let userLogin = req.body
        User.findOne({
            where: {
                username : userLogin.username.toLowerCase()
            }
        })
            .then(data => {
                if (crypt.checkPassword(userLogin.password, data.password)) {
                    let signUser = {
                        username: data.username,
                        email: data.email,
                        phonenumber: data.phonenumber,
                        kolakCount:data.kolakCount,
                        rujakCount:data.rujakCount,
                        cendolCount:data.cendolCount
                    };
                    let token = jwt.sign(signUser);
                    res.status(200).json({
                        "status":"success",
                        "Authorization":token,
                    })
                } else{
                    res.status(400).json(
                        {"status":"failed","message":"Wrong Username or Password"}
                    )
                }
            })
            .catch(err=>{
               throw err
            })
    }

    static help(req,res){
        res.status(200).json({
            "status":"success",
            "message":"Selamat datang di aplikasi cendol kolak rujak. Anda bisa melihat jumlah cemilan anda disini"
          })
    }
}

module.exports = Controller