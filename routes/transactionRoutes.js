const express = require('express')
const { addTransaction, getAllTransaction,editTransaction,deleteTransaction } = require('../controllers/transactionController')

// router object
const router = express.Router()


// routes

// add transactions POST Method
router.post('/add-transaction',addTransaction)

// edit transactions POST Method
router.post('/edit-transaction',editTransaction)

// delete transactions POST Method
router.post('/delete-transaction',deleteTransaction)

// get transactions
router.post('/get-transaction',getAllTransaction)

module.exports = router