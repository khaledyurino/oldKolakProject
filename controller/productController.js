const { User } = require("../models")


class Controller {
    static upKolak(kolak, res,number) {
        if (Number(number.count)) {
            User.findOne({
                where: {
                    username: kolak.user.username
                }
            })
                .then(data => {
                    User.findByPk(data.id)
                        .then(user => {
                            return user.increment('kolakCount', { by: number.count })
                        })
                        .then(updated => {
                            res.status(200).json({
                                username: updated.username,
                                email: updated.email,
                                phonenumber:updated.phonenumber,
                                kolakCount: updated.kolakCount
                            })
                        })
                })
                .catch(err => {
                    res.status(404).json({
                        status: "failed"
                    })
                })
        } else {
            res.status(400).json({"status":"failed","message":"count must be integer"})
        }
    }
    static downKolak(kolak, res,number) {
        if (Number(number.count)) {
            User.findOne({
                where: {
                    username: kolak.user.username
                }
            })
                .then(data => {
                    User.findByPk(data.id)
                        .then(user => {
                            if(user.kolakCount <=0){
                                res.status(400).json({
                                    "status":"failed",
                                    "message":"Count Can't be below 0"
                                })
                                return user.kolakCount = 0
                            }
                            return user.decrement('kolakCount', { by: number.count })
                        })
                        .then(updated => {
                            res.status(200).json({
                                username: updated.username,
                                email: updated.email,
                                phonenumber:updated.phonenumber,
                                kolakCount: updated.kolakCount
                            })
                        })
                })
                .catch(err => {
                    res.status(404).json({
                        status: "failed"
                    })
                })
        } else {
            res.status(400).json({"status":"failed","message":"count must be integer"})
        }
        
    }
    static upRujak(rujak, res,number) {
        if (Number(number.count)) {
            User.findOne({
                where: {
                    username: rujak.user.username
                }
            })
                .then(data => {
                    User.findByPk(data.id)
                        .then(user => {
                            return user.increment('rujakCount', { by: number.count })
                        })
                        .then(updated => {
                            res.status(200).json({
                                username: updated.username,
                                email: updated.email,
                                phonenumber:updated.phonenumber,
                                rujakCount: updated.rujakCount
                            })
                        })
                })
                .catch(err => {
                    res.status(404).json({
                        status: "failed"
                    })
                })
        } else {
            res.status(400).json({"status":"failed","message":"count must be integer"})
        }
        
    }
    static downRujak(rujak, res,number) {
        if (Number(number.count)) {
            User.findOne({
                where: {
                    username: rujak.user.username
                }
            })
                .then(data => {
                    User.findByPk(data.id)
                        .then(user => {
                            if(user.rujakCount <=0){
                                res.status(400).json({
                                    "status":"failed",
                                    "message":"Count Can't be below 0"
                                })
                                return user.rujakCount = 0
                            }
                            return user.decrement('rujakCount', { by: number.count })
                        })
                        .then(updated => {
                            res.status(200).json({
                                username: updated.username,
                                email: updated.email,
                                phonenumber:updated.phonenumber,
                                rujakCount: updated.rujakCount
                            })
                        })
                })
                .catch(err => {
                    res.status(404).json({
                        status: "failed"
                    })
                })
        } else {
            res.status(400).json({"status":"failed","message":"count must be integer"})
        }
        
    }
    static upCendol(cendol, res,number) {
        if (Number(number.count)) {
            User.findOne({
                where: {
                    username: cendol.user.username
                }
            })
                .then(data => {
                    User.findByPk(data.id)
                        .then(user => {
                            return user.increment('cendolCount', { by: number.count })
                        })
                        .then(updated => {
                            res.status(200).json({
                                username: updated.username,
                                email: updated.email,
                                phonenumber:updated.phonenumber,
                                cendolCount: updated.cendolCount
                            })
                        })
                })
                .catch(err => {
                    res.status(404).json({
                        status: "failed"
                    })
                })
        } else {
            res.status(400).json({"status":"failed","message":"count must be integer"})
        }
       
    }
    static downCendol(cendol, res,number) {
        if (Number(number.count)) {
            User.findOne({
                where: {
                    username: cendol.user.username
                }
            })
                .then(data => {
                    User.findByPk(data.id)
                        .then(user => {
                            if(user.cendolCount <=0){
                                res.status(400).json({
                                    "status":"failed",
                                    "message":"Count Can't be below 0"
                                })
                                return user.cendolCount = 0
                            }
                            return user.decrement('cendolCount', { by: number.count })
                        })
                        .then(updated => {
                            res.status(200).json({
                                username: updated.username,
                                email: updated.email,
                                phonenumber:updated.phonenumber,
                                cendolCount: updated.cendolCount
                            })
                        })
                })
                .catch(err => {
                    res.status(404).json({
                        status: "failed"
                    })
                })
        } else {
            res.status(400).json({"status":"failed","message":"count must be integer"})
        }
        
    }
    static reset(reset, res,state) {
        if (Boolean(state)) {
            User.findOne({
                where: {
                    username: reset.user.username
                }
            })
                .then(data => {
                    return data.update({
                        kolakCount: 0,
                        rujakCount: 0,
                        cendolCount: 0
                    })
                })
                .then(updated => {
                    res.status(200).json({
                        username: updated.username,
                        email: updated.email,
                        phonenumber: updated.phonenumber,
                        kolakCount: updated.kolakCount,
                        rujakCount: updated.rujakCount,
                        cendolCount: updated.cendolCount,
                    })
                })
                .catch(err => {
                   
                })
        } else {
            res.status(400).json({"status":"failed","message":"state must be Boolean"})
        }
    }

    static status(req,res,decodedUser){
        User.findOne({
            where:{
                username:decodedUser.username
            }
        })
        .then(data=>{
           
                res.status(200).json({
                "username": data.username,
                "email": data.email,
                "phonenumber": data.phonenumber,
                "kolakCount":data.kolakCount,
                "rujakCount":data.rujakCount,
                "cendolCount":data.cendolCount
            })
        })
        .catch(err=>{
            res.status(401).json({"status":"failed","message":"please login/sign-up"})
        })
    }
}

module.exports = Controller