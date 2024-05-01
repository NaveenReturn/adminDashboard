const User = require("../module/UserSchema");

exports.PostRegister = async(req,res,next)=>{
       const Role = req.body.role;
       const {username,email,password} = req.body;
        if(!username || !email || !password){
             return res.status(401).json({
                     success:false,
                     message:"please enter field"
              }) 
        }
       if(Role == "admin"){
              const role = "admin";
              const admin = await  User.create({username:username,email:email,password:password,role});
              if(!admin){
                     res.status(401).json({
                            success:false,
                            message:"network error"
                     }) 
              }
              res.status(201).json({
                     success:true,
                     message:"admin create success"
              }) 
       }else{
              const user = await  User.create(req.body);
              if(!user){
                     res.status(401).json({
                            success:false,
                            message:"network error"
                     }) 
              }
              res.status(201).json({
                     success:true,
                     message:"user create success"
              }) 
       }
}
// GET ALL USER API
exports.getAllUsers = async(req,res)=>{

       const users = await User.find();
        const userOnly = users.filter(user =>user.role != 'admin');
       return res.status(200).json({
              success : true ,
              message:"success",
              userOnly
       })
}
// SEARCH USER API
exports.searchApi = async(req,res)=>{
       const {query} = req.query;
       // console.log(query)
       const users = await User.find();
       const userOnly = users.filter(user =>user.role != 'admin');
      
     const filterUser = userOnly.filter((items)=>{
              return items.username.toLowerCase().includes(query.toLowerCase()) || items.email.toLowerCase().includes(query.toLowerCase())
       })
       return res.status(200).json({
              success : true ,
              message:"success",
              filterUser
       })
}

// DELETE USER API
exports.deleteApi = async(req,res)=>{
       const {id} = req.params;
       
     const user = await User.findByIdAndDelete(id);
     if(!user){
       return res.status(401).json({
              success :false ,
              message:"user not found",
              
       })
     }
     return res.status(200).json({
       success : true ,
       message:"delete success",
       
})
}


//LOGIN API
exports.loginUser = async (req,res)=>{
       const {email,password} = req.body
    
       if(!email || !password){
           return res.status(404).json({
               sucess:false,
               message:"please enter email and password"
           })
       }
    
       //finding the user database
      const user = await User.findOne({email}).select('+password');
    
      if(!user){
       return res.status(404).json({
              sucess:false,
              message:"user not found"
          })
      }
       const passwordcheck = user.password == password
      if(!passwordcheck){
       return res.status(404).json({
              sucess:false,
              message:"password not match"
          })
      }
      return res.status(200).json({
       sucess:true,
       message:"login success",
       user
   })
    
    }