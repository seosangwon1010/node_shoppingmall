const express = require('express');

const router = express.Router();

// product 데이터 불러오기
router.get('/', (req, res) => {
    res.json({
        msg : "Successful get Datas "
    });
});



// product data 등록하기

router.post('/', (req,res) => {
    res.json({
        msg : "Successful post data"
    });
});





// product data 수정하기

router.patch('/update', (req,res) => {
    res.json({
        msg : "Successful update data"
    });
});




// product data 삭제하기
router.delete('/', (req,res) => {
    res.json({
        msg : "Successful delete data"
    });
});









module.exports = router;
