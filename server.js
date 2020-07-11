

const express = require('express'); // 상수화
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();


const productRouter = require('./routes/product');
const orderRouter = require('./routes/order');

// 미들웨어 설정
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

app.use(morgan("dev"))







app.use('/product', productRouter);
app.use('/order', orderRouter);


const app_port = 8099;

app.listen(app_port, console.log("Server Start"));




