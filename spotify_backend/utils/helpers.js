const jwt = require("jwt")
exports = {}
exports.getToken = async (email,user)=>{
    // this code will work when we will call get token function
    const token = jwt.sign({identifier: userModel._id});
    return token
};
module.exports = exports