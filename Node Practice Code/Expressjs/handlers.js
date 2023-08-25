let path = require("path");
class Session{
    constructor(userMail,expiresAt){
        this.userMail = userMail;
        this.expiresAt = expiresAt;
    }
    isExpired(){
        this.expiresAt < (new Date());
    }
}

const session = {};

function loginHandler(req,res,myVar="none"){
    // let loginPath = path.join(__dirname,"Website1/index.html")
    // res.sendFile(loginPath);
    res.render("index",{var:myVar})
}

module.exports  = {loginHandler};