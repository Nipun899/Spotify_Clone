const jwt = require("jsonwebtoken")
exports = {}
exports.getToken = async (email,user)=>{
    // this code will work when we will call get token function
    const token = jwt.sign({identifier: user._id},"thisISaSecretKey");
    return token
};
module.exports = exports