const express = require('express')
const app = express()

app.get('/', function(req, res){
    res.send('Успешно выполнен(а) регистрация/вход')
})

app.listen(3000, function(){    
    console.log("Server has been started at http://localhost:3000");
})
