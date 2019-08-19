
const express = require('express');
const appConfig = require('../config/appConfig');
const response = require('../lib/response');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const userModel = mongoose.model('users');
const bookModel = mongoose.model('books');
const purchaseModel = mongoose.model('purchase');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const secretKey = "SomeRandomkey";
//create route
let sayHello = (req, res) => {
    res.send('Hello Test APP');
}
let loginUser = (req, res) => {
    userModel.findOne({
        email: req.body.email
    }).exec((err, user) => {
        if (err) {
            let apiResponse = response.generate(true, 'Error Occured.', 500, err);
            res.send(apiResponse);
        } else {
            bcrypt.compare(req.body.password, user.password)
                .then((result) => {
                    if (result == true) {
                        console.log("Login successfully done .....");
                        jwt.sign({ data: user }, secretKey, (error, token) => {
                            if (error) {
                                console.log("Something Wrong");
                                let apiResponse = response.generate(true, 'Error Occured.', 500, error);
                                res.send(apiResponse);
                            } else {
                                let authToken = { 'authToken': token };
                                let apiResponse = response.generate(false, 'Login successfully done', 200, authToken);
                                res.send(apiResponse);
                            }
                        })
                    }
                })
                .catch((error) => {
                    console.log("Email or Password is wrong ...");
                    let apiResponse = response.generate(true, 'Email or Password is wrong ', 200, error);
                    res.send(apiResponse);
                })

        }
    })
}

let createUser = (req, res) => {
    bcrypt.hash(req.body.password, saltRounds, (err, hash) => {
        let createNewUser = new userModel({
            name: req.body.name,
            email: req.body.email,
            // Store hash in your password DB.
            password: hash
        })
        createNewUser.save().then((result) => {
            let userDetails = { 'userDetails': result };
            let apiResponse = response.generate(false, 'User Account has been created Successfully.', 200, userDetails);
            res.send(apiResponse);
        })
            .catch((err) => {
                console.log("Something going wrong ....");
                let apiResponse = response.generate(true, 'Error Occured', 500, null);
                res.send(apiResponse);

            })
    })
}

let addBook = (req, res) => {
    let addNewBook = new bookModel({
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
        unit: req.body.unit
    })
    addNewBook.save((err, bookDetails) => {
        if (err) {
            console.log("Something is missing");
            let apiResponse = response.generate(true, 'Failed to add Book Details', 500, null);
            res.send("Something is missing");
        } else {
            let apiResponse = response.generate(false, 'Adding Book Details Successfully', 200, bookDetails);
            res.send(apiResponse);
        }
    })
}

let sellBook = (req, res) => {
    bookModel.find({ unit: { $gt: 0 } })
        .exec((err, bookDetails) => {
            console.log("Details :::", bookDetails);
            if (err) {
                let apiResponse = response.generate(true, 'Book is not listed here.', 500, null);
                res.send(apiResponse);
            } else {
                console.log('Response list .....');
                let apiResponse = response.generate(false, 'All Books are listed.', 200, bookDetails);
                res.send(apiResponse);
            }
        })
}
let purchaseBook = (req, res) => {
    console.log("req.params", req.params);
    bookModel.find({ book_id: req.params.bookId })
        .exec()
        .then((bookDetails) => {
            let purchaseBook = new purchaseModel({
                email: req.user.email,
                book_id: req.params.bookId
            })
            purchaseBook.save()
                .then((bookInfo) => {
                    let purchaseDetails = { 'purchaseDetails': bookInfo };
                    console.log();
                    let apiResponse = response.generate(false, 'Your Order has been done successfully.', 200, purchaseDetails);
                    res.send(apiResponse);
                })
                .catch((err) => {
                    console.log(err);
                    let apiResponse = response.generate(true, 'Error Occured.', 500, null);
                    res.send(apiResponse);
                })
        })
        .catch((error) => {
            let apiResponse = response.generate(true, 'Book is not found.', 500, null);
            res.send(apiResponse);
        })
}

module.exports = {
    createUser: createUser,
    loginUser: loginUser,
    addBook: addBook,
    sellBook: sellBook,
    purchaseBook: purchaseBook,
    sayHello: sayHello
}
