const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
    res.json({
        msg : "Successful get orders"
    });
});

router.post('/', (req,res) => {
    res.json({
        msg : "Successful post order"
    });
});

router.patch('/', (req,res) => {
    res.json({
        msg : "Successful update order"
    });
});

router.delete('/', (req,res) => {
    res.json({
        msg : "Successful delete order"
    });
});











module.exports = router;


