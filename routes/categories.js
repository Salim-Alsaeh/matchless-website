const express = require('express');

const {
    getAllCategories,
    getCategory,
    createCategory,
    updateCategory,
    deleteCategory
} = require('../controllers/Categories');

const router = express.Router();

// importing protect & authorize from middleware to protect the desired routs
const { protect, authorize } = require('../middlewares/auth');

router.route('/').get(getAllCategories).post(protect, authorize('admin'), createCategory);

router.route('/:id').get(getCategory).put(protect, authorize('admin'), updateCategory).delete(protect, authorize('admin'), deleteCategory);

module.exports = router;

