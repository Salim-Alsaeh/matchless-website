const Category = require("../models/Category");

//  @desc Get all Categories
//  @route GET /api/v1/categories
//  @access Public

exports.getAllCategories = async (req, res, next) => {
    try {
        const Categories = await Category.find();
        res.status(200).json({
            success: true,
            data: Categories
        });
    } catch (err) {
        res.status(400).json({
            success: false,
            msg: err.message
        });
    }
};

//  @desc Get a single category
//  @route GET /api/v1/categories/:id
//  @access Public
exports.getCategory = async (req, res, next) => {
    try {
        const aCategory = await Category.findById(req.params.id);
        if (!aCategory) {
            return res.status(400).success({
                success: false
            });
        }

        res.status(200).json({
            success: true,
            data: aCategory
        });
    } catch (err) {
        res.status(400).json({
            success: false,
            msg: err.message
        });
    }
};

//  @desc Create a single category
//  @route POST /api/v1/categories
//  @access Private
exports.createCategory = async (req, res, next) => {
    try {
        console.log(req.body)
        const aCategory = await Category.create(req.body);

        res.status(201).json({
            success: true,
            data: aCategory
        });
    } catch (err) {
        res.status(400).json({
            success: false,
            msg: err.message
        });
    }
};

//  @desc Update a single category
//  @route PUT /api/v1/categories/:id
//  @access Private

exports.updateCategory = async (req, res, next) => {
    try {
        const aCategory = await Category.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
        if (!aCategory) {
            return res.status(400).json({
                success: false
            });
        }
        res.status(200).json({
            success: true,
            data: aCategory
        });
    } catch (err) {
        res.status(400).json({
            success: false,
            msg: err.message
        });
    }
};

//  @desc delete a single category
//  @route DELETE /api/v1/categories/:id
//  @access Private
exports.deleteCategory = async (req, res, next) => {
    try {
        const aCategory = await Category.findByIdAndDelete(req.params.id);
        if (!aCategory) {
            return res.status(400).json({
                success: false
            });
        }
        res.status(200).json({
            success: true,
            data: {}
        });
    } catch (err) {
        res.status(400).json({
            success: false,
            msg: err.message
        });
    }
};
