const express = require('express')
const router = express.Router();
const {createUser, getUsers, getUser, deposit, credit, Withdraw, transfer} = require('../conroller/userController') 

router.post('/users', (req, res)=>{
    createUser(req, res)
})
router.get('/users', (req, res)=>{
    getUsers(req, res)

})
router.get('/users/:id', (req, res)=>{
    getUser(req, res)

})
router.put('/users/deposit/:id', (req, res)=>{
    deposit(req, res)
})
router.put('/users/credit/:id', (req, res)=>{
    credit(req, res)
})
router.put('/users/Withdraw/:id', (req, res)=>{
    Withdraw(req, res)
})
router.put('/users/transfer/:id', (req, res)=>{
    transfer(req, res)
})

module.exports= router