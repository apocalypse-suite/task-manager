const express = require('express');
const app = express();

const bodyParser = require('body-parser');

app.get('/lists', (req, res) => {
    res.send("hello, world!");
});

app.post('/lists', (req,res)=>{

});

app.patch('/lists/:id',(req,res)=>{

});

app.delete('/lists/:id',(req,res)=>{

});

app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});
