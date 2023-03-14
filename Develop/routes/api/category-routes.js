const router = require('express').Router();
const dbName = process.env.DB_NAME;
const { SELECT } = require('sequelize/types/query-types');
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
    // find all categories
    try {
        const categoryCall = Category.findAll({
            include: [{ category_name }],
        });
        res.status(200).json(categoryCall);
    } catch (err) {
        res.status(500).json(err);
    }
    // be sure to include its associated Products
    try {
        const categoryProd = Category.findAll({
            include: [{ product_name }],
        });
        res.status(200).json(categoryProd);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/:id', (req, res) => {
    // find one category by its `id` value
    const categoryId = 'SELECT * FROM product.id = category.id';
    // might need to specify more
    // be sure to include its associated Products
});

router.post('/', (req, res) => {
    // create a new category

});

router.put('/:id', (req, res) => {
    // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
    // delete a category by its `id` value
});

module.exports = router;

