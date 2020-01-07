const Items = require('../models/Item')

//  @desc Get all Items
//  @route GET /api/v1/Items
//  @access Public

exports.getAllItems = async (req, res, next) => {
    try {
        const items = await Items.find()

        res.status(200).json({
            success: true,
            data: items
        })
    } catch (err) {
        res.status(400).json({
            success: false,
            error: err.message

        })
    }
}

//  @desc Get one Item
//  @route GET /api/v1/Item/id
//  @access Public

exports.getItem = async (req, res, next) => {
    try {
        const item = await Items.findById(req.params.id)

        res.status(200).json({
            success: true,
            data: item
        })
    } catch (err) {
        res.status(400).json({
            success: false,
            error: err.message
        })
    }
}

//  @desc Get create Item
//  @route GET /api/v1/Item
//  @access Public

exports.createItem = async (req, res, next) => {
    try {
        const item = await Items.create(req.body)

        res.status(201).json({
            success: true,
            data: item
        })
    } catch (err) {
        res.status(400).json({
            success: false,
            error: err.message
        })
    }
}

//  @desc Get Update Item
//  @route GET /api/v1/Item/id
//  @access Public

exports.updateItem = async (req, res, next) => {
    try {
        const item = await Items.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        })
        if (!item) {
            res.status(400).json({
                success: true,
            })
        }
        res.status(201).json({
            success: true,
            data: item
        })
    } catch (err) {
        res.status(400).json({
            success: false,
            error: err.message
        })
    }
}

//  @desc Get delete Item
//  @route GET /api/v1/Item/id
//  @access Public

exports.deleteItem = async (req, res, next) => {
    try {
        const item = await Items.findByIdAndDelete(req.params.id)

        if (!item) {
            res.status(400).json({
                success: true,
            })
        }
        res.status(200).json({
            success: true,
            data: item
        })
    } catch (err) {
        res.status(400).json({
            success: true,
            error: err.message
        })
    }
}