const express = require("express");
const { PostRegister, getAllUsers, searchApi, deleteApi, loginUser } = require("../controllers/autherControl");

const routers = express.Router();

routers.route('/newauther').post(PostRegister);
routers.route("/getallusers").get(getAllUsers);
routers.route("/searchuser").get(searchApi);
//delete api
routers.route("/user/delete/:id").delete(deleteApi);

// login
routers.route("/login").post(loginUser)
module.exports = routers;