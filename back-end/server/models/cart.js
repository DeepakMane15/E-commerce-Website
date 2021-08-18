const mongoose = require('mongoose')

const cartSchema = new mongoose.Schema({

    userId: {
      type: mongoose.Schema.Types.ObjectId, ref: 'user',required: true
  },
  cartItems:[
      {
          products: {  type: mongoose.Schema.Types.ObjectId, ref: 'Product',  require:true },
          quantity: {type: Number, default: 1},
          price: {type:Number, required:true}
      }
      
  ]
},
    { timestamp: true });

module.exports = mongoose.model('Cart', cartSchema)