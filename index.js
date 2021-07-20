const express = require('express');
const port = 3000;
const app = express();
app.use(express.json());
app.get('/home', (request, response)=>{
    console.log(request);
    response.send("hello node.js");
});

app.listen(port, ()=>{
    console.log(`App start listen on port ${port}`);
});
