const Product = require('../model/product.model');
console.log('Accessing Controller');
module.exports = {

    createProduct: (req,res) => {
    
        Product.create(req.body)
            .then((newProduct) => {
                console.log(`New Product Created! Product : ${newProduct}`);
                
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
    },


    updateProduct : (req,res) => {
        Product.findOneAndUpdate({_id: req.params.id}, req.body, {new:true, runValidators: true})
        .then((updatedProduct) => {
            console.log(updatedProduct);
            res.json(updatedProduct);
        })
        .catch((err) => console.log(err))
    },
    deleteProduct : (req,res) => {
        Product.deleteOne({_id:req.params.id})
            .then((deletedProduct) => {
                console.log(deletedProduct);
                res.json(deletedProduct)
            })
            .catch((err)=> console.log(err))
    }
}