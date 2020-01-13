const express = require('express')

const {
    getAllItems,
    getItem,
    createItem,
    updateItem,
    deleteItem,
    getAllItemsByCatgeoryId
} = require('../controllers/items');

const router = express.Router();
// importing protect & authorize from middleware to protect the desired routs
const { protect, authorize } = require('../middlewares/auth');

router.route('/').get(getAllItems).post(protect, authorize('admin'), createItem);

router.route('/:categoryId').get(protect, getAllItemsByCatgeoryId);

router.route('/:id').get(getItem).put(protect, authorize('admin'), updateItem).delete(protect, authorize('admin'), deleteItem);

module.exports = router;
