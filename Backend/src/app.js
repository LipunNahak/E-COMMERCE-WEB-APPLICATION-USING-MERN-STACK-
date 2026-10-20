const express=require('express')
const authRoutes = require('./routes/auth.routes');
const productRoutes = require('./routes/product.routes');
const cartRoutes = require('./routes/cart.routes');
const addressRoutes = require('./routes/address.routes');
const orderRoutes=require('./routes/order.routes');
const app=express();
const cors = require("cors");

app.use(cors({
    origin: "http://localhost:5173"
}));



app.use(express.json());

app.use('/api/auth',authRoutes);
app.use('/api/products',productRoutes);
app.use('/api/cart',cartRoutes);
app.use('/api/address',addressRoutes);
app.use('/api/order',orderRoutes);


module.exports=app;
