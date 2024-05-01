const mongoose = require("mongoose");

const Database = ()=>{
    try{
       mongoose.connect("mongodb://127.0.0.1:27017/google")
       .then((con)=>{
            console.log(`Database connect ${con.connection.host}`)
       })
    }catch(err){
       console.log(err)
    }
}
Database();