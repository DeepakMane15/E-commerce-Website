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
           //update in existing cart
           isItemAdded = user.cartItems.find(c => c.products==req.body.cartItems.products);
           let condition,update;

           if(isItemAdded){
               condition= {"userId": req.user._id, "cartItems.products": req.body.cartItems.products };
               update = {
                "$set": {
                    "cartItems.$": { 
                        ...req.body.cartItems,
                        quantity: isItemAdded.quantity + Number(req.body.cartItems.quantity),
                        price: (isItemAdded.quantity +  Number(req.body.cartItems.quantity)) * Number(req.body.cartItems.price) 

                    }
                }
            }
           }
           else{
               condition = {userId: req.user._id}
               update = {
                "$push": {
                    "cartItems": req.body.cartItems
                }
            }
           
           }
           Cart.findOneAndUpdate(condition, update )
            .exec((error,_cart) => {
            if(error) return res.status(400).json({error})
            if(_cart) return res.status(200).json({_cart})
        })
        }
        else{
            const cart = new Cart({
                userId: req.user._id,
                cartItems: [req.body.cartItems]
            });
            
            cart.save((error,cart)=> {
                if(error) return res.status(400).json({error})
                if(cart) return res.status(200).json({cart})
            })
        }
        
        
    })


}