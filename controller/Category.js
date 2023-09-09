const { Category } = require("../model/Category");


exports.fetchCategories = async (req, res) => {
    try {
        const categories = await Category.find({}).exec();
        res.status(200).json(categories)
    } catch (error) {
        res.status(400).json({
            success: false,
            message: "Error while getting Categories",
            error
        });
    }
}

exports.createCategory = async (req, res) => {
    try {
        const category = new Category(req.body);
        const doc = await category.save();
        res.status(200).json(doc)
    } catch (error) {
        res.status(400).json({
            success: false,
            message: "Error while creating Category",
            error
        });
    }
}