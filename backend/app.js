const express = require("express");
const app = express();

app.use(express.json())
const database = require("./database");
const Autherrouters = require("./routers/autherRouters")

// MAIN URL MAINTENED
app.use('/api/v1/',Autherrouters)
app.listen(8000,()=>{
    console.log("server start 8000");
})
module.exports = app;