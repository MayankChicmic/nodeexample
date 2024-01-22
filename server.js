const express = require('express')
const app = express()


app.get('/test',(req,res) => {
    res.json({
        gello:"asdasd"
    })
})

app.listen(80)