const Product = require('../models/product.model');

module.exports = {

    createProduct: (req,res) => {
        Product.create(req.body)
            .then((newProduct) => {
                console.log(newProduct);
                res.json(newProduct)
            })
            .catch ((err) => console.log(err));
    },

    getAllProducts : (req,res) => {
        Product.find({})
        // .then((allProducts) => console.log(allProducts)) res.json(allProducts))
        // .then((allProducts) => 
        //     console.log(allProducts), res.json(allProducts))
        .then(allProducts =>{
            res.json(allProducts);
        })
            // .catch ((err) => 
            // console.log(err));
        .catch(err=> {
            res.status(400).json({message: "Something went wrong in getAllMovies", error : err});
        });
    }, 

    getOneProduct : (req,res) => {
        Product.findOne({_id: req.params.id})
        .then ((oneProduct) => {
            console.log(oneProduct);
            res.json(oneProduct);
        })
        .catch ((err) => console.log(err))
    }
}