const express = require('express');
const dotenv = require('dotenv');
dotenv.config();  //сразу после require dotenv делаем конфиг - он все что в файле .env записывает в объект process
const port = process.env.APP_PORT;   // это вместо того, что мы раньше хардкодили: const port = 3000;
//теперь порт берем культурно, из наших .env  переменных окружения

const app = express();
app.use(express.json());
app.get('/home', (request, response)=>{
    console.log(request);
    response.send("hello node.js");
});

app.listen(port, ()=>{
    console.log(`App start listen on port ${port}`);
});
