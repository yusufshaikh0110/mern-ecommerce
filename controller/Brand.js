const { Brand } = require("../model/Brand")

exports.fetchBrands = async (req, res) => {
    try {
        const brands = await Brand.find({}).exec();
        res.status(200).json(brands)
    } catch (error) {
        res.status(400).json({
            success: false,
            message: "Error while getting Brands",
            error
        });
    }
}

exports.createBrand = async (req, res) => {
    try {
        const brand = new Brand(req.body);
        const doc = await brand.save();
        res.status(200).json(doc)
    } catch (error) {
        res.status(400).json({
            success: false,
            message: "Error while creating Brand",
            error
        });
    }
}