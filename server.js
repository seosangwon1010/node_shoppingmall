

const express = require('express'); // 상수화
const app = express();


const productRouter = require('./routes/product');
const orderRouter = require('./routes/order');


app.use('/product', productRouter);
app.use('/order', orderRouter);


const app_port = 8099;

app.listen(app_port, console.log("Server Start"));




