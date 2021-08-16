const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors')
const bodyParser = require('body-parser')

const userRoutes = require('./routes/user')
const adminRoutes = require('./routes/admin')
const categoryRoutes = require('./routes/category')
const productRoutes = require('./routes/product')
const cartRoutes = require('./routes/cart')


dotenv.config()

mongoose.connect(process.env.DATABASE_ACCESS, {useNewUrlParser: true},() => console.log("Database Connected"))

app.get('/',(req,res,next) => {
    res.status(200).json({
        message: "hello from server"
    })
});

app.post('/data', (req,res,next) => {
    res.status(200).json({
        message: req.body
    });
});


// app.use(cors())
app.use(express.json());
app.use('/app', userRoutes);
app.use('/app', adminRoutes);
app.use('/app', categoryRoutes);
app.use('/app', productRoutes);
app.use('/app', cartRoutes);
app.listen(4000, () => console.log('server is up and running on 4000'))