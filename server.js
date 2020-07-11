

const express = require('express'); // 상수화
const app = express();


app.use((req, res) => {
    res.json({
        msg: "Successful main data"
    })
})




const app_port = 8099;

app.listen(app_port, console.log("Server Start"));




