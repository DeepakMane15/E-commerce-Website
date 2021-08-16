const Cart= require('../models/cart');

exports.addItemToCart = (req,res) => {
    Cart.findOne({userId: req.user._id})
    .exec((error, user) => {
        if(error){
            return res.status(400).json({
                error
            });
        }
        if (user) {
            return res.status(400).json({
                message: "cart already exists"
            });
        }
        else{
            const cart = new Cart({
                userId: req.user._id,
                cartItems: req.body.cartItems
            });
            
            cart.save((error,cart)=> {
                if(error) return res.status(400).json({error})
                if(cart) return res.status(200).json({cart})
            })
        }
        
        
    })


}