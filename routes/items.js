const express = require('express')

const {
    getAllItems,
    getItem,
    createItem,
    updateItem,
    deleteItem
} = require('../controllers/items')

const router = express.Router()

router.route('/').get(getAllItems).post(createItem)

router.route('/:id').get(getItem).put(updateItem).delete(deleteItem)

module.exports = router