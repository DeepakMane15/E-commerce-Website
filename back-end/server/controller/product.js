
const Product= require('../models/product');
const slugify = require('slugify')

exports.createProduct = (req,res) => {
    
// res.status(200).json({message:"hello"})
    const {
        name,price,quantity, description,productpictures,category,createdBy
    } = req.body;

    let productPictures = [] ;
    let date_ob = new Date();

    if(req.files.length != 0) {
        productPictures = req.files.map(file => {
            return {img: file.filename}
        })
    }

    const product = Product ({
        name: name,
        slug: slugify(name),
        price,
        quantity,
        description,
        productPictures,
        category,
        createdBy: req.user._id,
        createdAt: date_ob.getDate()
    });
    product.save(((error, product) => {
        if(error) return res.status(400).json({error})
        if(product) return res.status(201).json({product})
    }))

}